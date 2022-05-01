const express = require("express");
const router = new express.Router();
//produuct schema
const Products = require("../models/productsSchema");
const USER = require("../models/userSchema");
const bcrypt = require("bcryptjs");
const authenticate = require("../middleware/authenticate");

//get product data api
router.get("/getproducts", async (req, res) => {
  try {
    const productsdata = await Products.find(); //find all data from db
    // console.log(`productsdata : ${productsdata}`);
    res.status(201).json(productsdata);
  } catch (err) {
    console.log(err.message);
  }
});

//get individual product data api
router.get("/getproductsone/:id", async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    const indivisualdata = await Products.findOne({ id: id });
    // console.log(indivisualdata);
    res.status(201).json(indivisualdata);
  } catch (err) {
    // console.log(err.message);
    res.status(400).json({ message: err.message });
  }
});

//register data
router.post("/register", async (req, res) => {
  // console.log(req.body);
  const { fname, email, mobile, password, cpassword } = req.body;

  if (!fname || !email || !mobile || !password || !cpassword) {
    res.status(422).json({ error: "filll the all details" });
    console.log("fill all the details");
  }

  try {
    const preuser = await USER.findOne({ email: email });

    if (preuser) {
      res.status(422).json({ error: "This email is already exist" });
    } else if (password !== cpassword) {
      res.status(422).json({ error: "password are not matching" });
    } else {
      const finaluser = new USER({
        fname,
        email,
        mobile,
        password,
        cpassword,
      });

      // yaha pe hasing krenge

      const storedata = await finaluser.save();
      // console.log(storedata + "user successfully added");
      res.status(201).json(storedata);
    }
  } catch (error) {
    console.log(error.message);
    res.status(422).send(error);
  }
});

//login api
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(422).json({ error: "filll the all details" });
  }

  try {
    const userlogin = await USER.findOne({ email: email });
    console.log(userlogin + "user value"); //userlogin data base passward

    if (userlogin) {
      const isMatch = await bcrypt.compare(password, userlogin.password);
      // console.log(isMatch)

      //token genration (so taht our login save for some time)
      const token = await userlogin.generateAuthToken();
      // console.log(token);
      res.cookie("Amazonweb", token, {
        expires: new Date(Date.now() + 900000),
        httpOnly: true,
      });

      if (!isMatch) {
        res.status(400).json({ error: "password is not matching" });
      } else {
        res.status(201).json(userlogin);
      }
    } else {
      res.status(400).json({ error: "password is not matching" });
    }
  } catch (err) {
    res.status(422).json({ error: "invalid details" });
  }
});

//adding data into cart

// adding the data into cart
router.post("/addcart/:id",authenticate, async (req, res) => {

  try {
      console.log("perfect 6");
      const { id } = req.params;
      const cart = await Products.findOne({ id: id });
      console.log(cart + "cart avilable");

      const Usercontact = await USER.findOne({_id:req.userID});
      console.log(Usercontact + "user avilable");


      if (Usercontact) {
          const cartData = await Usercontact.addcartdata(cart);

          await Usercontact.save();
          console.log(cartData + " cart value");
          console.log(Usercontact+ "user value");
          res.status(201).json(Usercontact);
      }
  } catch (error) {
      console.log(error);
  }
});


//get cart details 
router.get("/cartdetails",authenticate, async (req, res) => {
  try{
    const buyuser = await USER.findOne({_id:req.userID});
    console.log(buyuser + "user avilable");
    if(buyuser){
      res.status(201).json(buyuser);
    }

  }catch(err){
      console.log(err);
  }

})


//get valid user
router.get("/validuser",authenticate,async(req,res)=>{
  try {
      const validuserone = await USER.findOne({_id:req.userID});
      console.log(validuserone + "user hain home k header mai");
      res.status(201).json(validuserone);
  } catch (error) {
      console.log(error+"error for valid user");
  }
});


// remove iteam from the cart

router.delete("/remove/:id",authenticate,async(req,res)=>{
  try {
      const {id} = req.params;

      req.rootUser.carts = req.rootUser.carts.filter((curel)=>{
          return curel.id !=id
      });

      req.rootUser.save();
      res.status(201).json(req.rootUser);
      console.log("iteam remove");

  } catch (error) {
      // console.log(error + "jwt provide then remove");
      res.status(400).json(error);
  }
});


//log out 
router.get('/logout',authenticate,async(req,res)=>{
  try{
    req.rootUser.tokens =  req.rootUser.tokens.filter((token)=>{
        return token.token !=req.token
    })

    res.clearCookie('Amazonweb',{path:'/'});
    req.rootUser.save();
    res.status (201).json(req.rootUser.tokens);
    console.log("logout");

  }catch(err){
    // res.status (201).json(req.rootUser.tokens);
    console.log(err+"error for logout");
  }

})


module.exports = router;
