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
});

//get individual product data api
router.get('/getproductsone/:id',async(req,res)=>{
    try{
      const id = req.params.id;
      console.log(id)
    const indivisualdata = await Products.findOne({id:id}); 
    // console.log(indivisualdata);
    res.status(201).json(indivisualdata);

    }catch(err){
        // console.log(err.message);
        res.status(400).json({message:err.message});
        

    }
})




module.exports =    router;