const express = require('express');
const { getCategories, CreateCategories } = require('../controller/product');
const router = express.Router()

router.get('/',getCategories)
router.post('/',CreateCategories)
// router.delete('/:id',)

module.exports = router