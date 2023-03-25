const express=require("express");
const route=express.Router(0);

//import 

route.get("/user", (req,res)=>{
        res.send({
            "data": "Your user has been"
        })
});

module.exports=route