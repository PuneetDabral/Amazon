const express = require('express');
const router = new express.Router();
//produuct schema
const Products = require('../models/productsSchema');

//get product data api
router.get('/getproducts',async(req,res)=>{
    try{
        const productsdata =await Products.find();  //find all data from db
        // console.log(`productsdata : ${productsdata}`);
        res.status(201).json(productsdata);

    }catch(err){
        console.log(err.message);

    }
})




module.exports =    router;