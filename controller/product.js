const { Categories } = require("../model/products");

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