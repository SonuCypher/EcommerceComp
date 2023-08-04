const mongoose = require('mongoose');

const categoriesSchema = mongoose.Schema({
    category:{
        type:String,
        required:true
    }
})
 const productsSchema = mongoose.Schema({
    CatId:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    availability:{
        type:Boolean,
        required:true
    }
 })
 const productDetailSchema = mongoose.Schema({
    details:{
        type:String,
        required:true
    },
    productId:{
        type:String,
        required:true
    }
 })

module.exports.Categories = mongoose.model('Categories',categoriesSchema)
module.exports.Products = mongoose.model('Products',productsSchema)
module.exports.ProductDetail = mongoose.model('ProductDetail',productDetailSchema)