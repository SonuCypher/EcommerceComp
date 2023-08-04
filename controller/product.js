const { Categories, Products, ProductDetail } = require("../model/products");

module.exports.getCategories = async (req,res)=>{
    try {
        const categories = await Categories.find({})
        res.status(200).json(categories)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

module.exports.CreateCategories = async (req,res)=>{
    const category = req.body
    const newCategory = new Categories(category)
    try {
        await newCategory.save()
        res.status(200).json({ message: 'Successfully created category'})
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}

module.exports.getProducts = async (req,res)=>{
    const {id}=req.params
    try {
        const products = await Products.find({CatId:id})
        res.status(200).json(products)
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}

module.exports.addProducts = async (req,res)=>{
    const {id} = req.params
    const products = req.body
    const newProducts = new Products({...products,CatId:id})
    try {
        await newProducts.save()
        res.status(200).json({ message: 'Successfully created product'})
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}

 module.exports.getProductDetails = async(req,res)=>{
    const {prodId}=req.params
    try {
        const productdetails = await ProductDetail.findOne({productId:prodId})
        res.json(productdetails.details) 
    } catch (error) {
        res.status(409).json({message: error.message})
    }
 }
 module.exports.addProductDetails = async(req,res)=>{
    const {prodId} = req.params
    const productdetail = req.body
    const newProductDetail = new ProductDetail({...productdetail, productId: prodId})
    try {
        await newProductDetail.save()
        res.status(200).json({ message: 'Successfully created productDetails' })
    } catch (error) {
        res.status(409).json({message: error.message})
    }
 }