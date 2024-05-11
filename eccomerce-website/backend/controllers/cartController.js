// this is the cart controller which will be used to add the product to the cart
// it will also display the product in the cart page
//It will also calculate the total price of all the products in the cart

// Path: eccomerce-website/backend/controllers/cartController.js

const Cart = require('../models/cart');

// Controller function to add product to cart
exports.addToCart = async (req, res, next) => {
  try {
    const { name, discountedPrice, image } = req.body;
    const cartItem = new Cart({ name, discountedPrice, image });
    await cartItem.save();
    res.json(cartItem);
  } catch (error) {
    next(error);
  }
};

// Controller function to get all products in cart
exports.getCartItems = async (req, res, next) => {
  try {
    const cartItems = await Cart.find();
    res.json(cartItems);
  } catch (error) {
    next(error);
  }
};

// Controller function to delete product from cart
exports.deleteCartItem = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Cart.findByIdAndDelete(id);
    res.json({ message: 'Item deleted successfully' });
  } catch (error) {
    next(error);
  }
};

// Controller function to calculate total price of all products in cart
exports.calculateTotalPrice = async (req, res, next) => {
  try {
    const cartItems = await Cart.find();
    const totalPrice = cartItems.reduce((total, item) => total + item.discountedPrice, 0);
    res.json({ totalPrice });
  } catch (error) {
    next(error);
  }
};

// Controller function to clear all products from cart
exports.clearCart = async (req, res, next) => {
  try {
    await Cart.deleteMany();
    res.json({ message: 'Cart cleared successfully' });
  } catch (error) {
    next(error);
  }
};

// Controller function to update product in cart
exports.updateCartItem = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, discountedPrice, image } = req.body;
    const updatedCartItem = await Cart.findByIdAndUpdate(id, { name, discountedPrice, image }, { new: true });
    res.json(updatedCartItem);
  } catch (error) {
    next(error);
  }
};

module.exports = Cart;