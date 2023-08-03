const express = require('express');
const { getCategories, CreateCategories, getProducts, addProducts } = require('../controller/product');
const router = express.Router()

router.get('/',getCategories)
router.post('/',CreateCategories)
// router.delete('/:id',)

router.get('/:id',getProducts)
router.post('/:id',addProducts)

module.exports = router