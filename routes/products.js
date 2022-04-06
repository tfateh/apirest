const express = require('express')
const { getAllProducts, addProduct, updateProduct, deleteProduct, getProductById, getUserById } = require('../controllers/product.controller')
const isAuth = require('../middlewares/passport-setup')

const Router = express.Router()

Router.get('/products',isAuth(),getAllProducts)

//Add new phone
Router.post('/addProduct',isAuth(),addProduct)

//Update a phone
Router.put('/:idProduct',isAuth(),updateProduct)

//Delete phone
Router.delete('/:idProduct',isAuth(),deleteProduct)

//GET Product By Id
Router.get("/:idProduct",isAuth(),getProductById)

//GET User and his products 
Router.get('/:idUser',isAuth(),getUserById)

module.exports = Router