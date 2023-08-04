const express = require('express')
const { signUp, login, logout } = require('../controller/users')
const { Validation } = require('../middleware/user')
const router = express.Router()

router.post('/signup',Validation,signUp)
router.post('/login',login)
router.get('/logout',logout)


module.exports = router