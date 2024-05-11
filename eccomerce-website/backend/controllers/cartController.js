const Cart = require('../models/cart');

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

exports.getCartItems = async (req, res, next) => {
  try {
    const cartItems = await Cart.find();
    res.json(cartItems);
  } catch (error) {
    next(error);
  }
};

// Other controller functions (deleteCartItem, calculateTotalPrice, clearCart, updateCartItem) are similar to addToCart and getCartItems
