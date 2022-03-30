const productdata = require("./constant/productsdata");
const Products = require("./models/productsSchema");

const DefaultData = async()=>{
    try {
        await Products.deleteMany({});  //when we restrt the app it create a multipal copy of data in db so to avoid that 
        const storeData = await Products.insertMany(productdata);
        // console.log(storeData);
    } catch (error) {
        console.log("error" + error.message);
    }
};

module.exports = DefaultData;