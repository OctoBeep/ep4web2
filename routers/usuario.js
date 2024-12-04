const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

router.post('/login', userController.obtenerUsuario);  

module.exports =  router 