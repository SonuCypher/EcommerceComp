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
    Price:{
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

module.exports.Categories = mongoose.model('Categories',categoriesSchema)
module.exports.Products = mongoose.model('Products',productsSchema)