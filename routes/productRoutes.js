const express = require('express');
const { getCategories, CreateCategories, getProducts, addProducts, getProductDetails, addProductDetails } = require('../controller/product');
const { roleValidation } = require('../middleware/user');
const router = express.Router()

router.get('/',getCategories)
router.post('/',roleValidation,CreateCategories)
// router.delete('/:id',)

router.get('/:id',getProducts)
router.post('/:id',roleValidation,addProducts)

router.get('/:id/:prodId',getProductDetails)
router.post('/:id/:prodId',roleValidation,addProductDetails)

module.exports = router