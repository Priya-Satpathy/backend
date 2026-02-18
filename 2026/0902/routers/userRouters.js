const express = require('express');
const {registerController, loginController} = require('../controllers/userControllers') 
const router = express.Router();

//REGISTER POST
router.post('/register',registerController)
router.post('/login',loginController)

module.exports = router