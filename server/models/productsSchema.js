const { Mongoose } = require("mongoose")
import { products } from './../../client/src/components/home/productdata';

const productsSchema = new Mongoose.Schema({
    id:String,
    url:String,
    detailsUrl:String,
    title:object,
    price:object,
    description:String,
    discount:String,
    tagline:String,

});

const Products = new Mongoose.model('products',productsSchema);

module.exports = Products;
