const slugify = require("slugify");
const Products = require("../models/products");

exports.create = (req, res) => {
    try {
        console.log(req.body);
        req.body.slug = slugify(req.body.title);
        const createProduct = new Products(req.body).save();
        res.json(createProduct);

    } catch (err) {
        console.log(err);
        // res.status(400).send("Create Product Failed");
        res.json.status(400)({
            err: err.message
        })
    }
}

exports.listAll = async (req, res) => {
    try {
        let products = await Products.find({}).
            limit(parseInt(req.params.count)).
            populate("category").
            populate("sub").
            sort([["createdAt", "desc"]]).exec();
        res.json(products);
    } catch (err) {
        console.log(err);
        res.json.status(400)({
            err: err.message
        })
    }
}


exports.read = async (req, res) => {
    try {
        let product = await Products.findOne({ slug: req.params.slug }).
            populate("category").
            populate("sub").
            sort([["createdAt", "desc"]]).exec();
        res.json(product);
    } catch (err) {
        console.log(err);
        res.json.status(400)({
            err: err.message
        })
    }
}

exports.update = async (req, res) => {
    try {
        if (req.body.title) {
            req.body.slug = slugify(req.body.title)
        }
        const updated = Products.findOneAndUpdate({ slug: req.params.slug }, req.body, { new: true }).exec();
        res.json(updated)
    } catch (e) {
        console.log("Update Backend catch ", e);
    }
}

exports.remove = async (req, res) => {
    try {
        let deleted = await Products.findOneAndRemove({ slug: req.params.slug }).exec();
        res.json(deleted)
    } catch (err) {
        console.log("Product Deletion failed", err);
    }
}

// without pagination
exports.list = async (req, res) => {
    try {
        const { sort, order, limit } = req.body
        let products = await Products.find({})
            .populate("category")
            .populate("sub")
            .sort([[sort, order]])
            .limit(limit)
            .exec();
        res.json(products)
    } catch (e) {
        console.log("lis Errror Backend", e);
    }
}



// with pagination
exports.list = async (req, res) => {
    try {
        const { sort, order, page } = req.body
        let currentPage=page||1;
        let perpage=3

        let products = await Products.find({})
        .skip((currentPage - 1) * perpage)
            .populate("category")
            .populate("sub")
            .sort([[sort, order]])
            .limit(3)
            .exec();
        res.json(products)
    } catch (e) {
        console.log("lis Errror Backend", e);
    }
}


exports.productscount = async (req, res) => {
    try {
        let resultcount = await Products.find({}).estimatedDocumentCount().exec();
        res.json(resultcount);
    } catch (e) {
        console.log(e)
    }
}