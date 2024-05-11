// This is the cart route which will be used to add products to the cart, get all products in the cart, delete a product from the cart, calculate the total price of all products in the cart, clear all products from the cart and update a product in the cart

// Path: eccomerce-website/backend/routes/cartRoutes.js

const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

router.post('/cart', cartController.addToCart);

router.get('/cart', cartController.getCartItems);

router.delete('/cart/:id', cartController.deleteCartItem);

router.get('/cart/total', cartController.calculateTotalPrice);

router.delete('/cart', cartController.clearCart);

router.put('/cart/:id', cartController.updateCartItem);

module.exports = router;