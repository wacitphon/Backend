const express = require('express')
const router = express.Router()
const authenticate = require('../middlewares/authenticate')
const authController = require('../controllers/auth-controller')


router.post('/register', authController.register) //register User
router.post('/registerte', authController.registerTe)
router.post('/login', authController.login)  //Login User
router.get('/me', authenticate, authController.getme) //Push User
router.get('/ad', authenticate, authController.getAd) //Push Admin

module.exports = router

