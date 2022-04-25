const express = require('express');
const router = new express.Router();
//produuct schema
const Products = require('../models/productsSchema');
const USER = require('../models/userSchema')

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

//register data 
router.post("/register", async (req, res) => {
    // console.log(req.body);
    const { fname, email, mobile, password, cpassword } = req.body;

    if (!fname || !email || !mobile || !password || !cpassword) {
        res.status(422).json({ error: "filll the all details" });
        console.log("bhai nathi present badhi details");
    };

    try {

        const preuser = await USER.findOne({ email: email });

        if (preuser) {
            res.status(422).json({ error: "This email is already exist" });
        } else if (password !== cpassword) {
            res.status(422).json({ error: "password are not matching" });;
        } else {

            const finaluser = new USER({
                fname, email, mobile, password, cpassword
            });

            // yaha pe hasing krenge

            const storedata = await finaluser.save();
            // console.log(storedata + "user successfully added");
            res.status(201).json(storedata);
        }

    } catch (error) {
        console.log( error.message);
        res.status(422).send(error);
    }

});


module.exports =    router;