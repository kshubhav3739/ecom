const express=require("express");
const route=express.Router();

const { authChek, AdminCheck } = require("../middleware/auth");
const {create,listAll,remove,read,update,list,productscount}=require("../controller/product")

route.post("/product",authChek,AdminCheck, create);
route.get("/products/:count", listAll);
route.delete("/products/:slug",authChek,AdminCheck, remove);
route.get("/product/:slug",read)
route.put("/product/:slug",update)
route.post("/products", list);
route.get("/productcount/total",productscount)
module.exports=route