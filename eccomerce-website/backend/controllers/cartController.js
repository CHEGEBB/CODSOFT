const Cart = require('../models/cart');



exports.addToCart = async (req, res) => {
  try {
    const { name, price, category } = req.body;
    // Find the product in the database based on the provided information
    const product = await Product.findOne({ name, price, category });
    if (product) {
      // If a matching product is found, return it
      return res.status(200).json(product);
    } else {
      // If no matching product is found, return an error message
      return res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    console.error('Error adding product to cart:', error);
    res.status(500).json({ message: "Internal server error" });
  }
}
exports.getCartItems = async (req, res) => {
  try {
    // Fetch cart items from the database
    const cartItems = await CartItem.find();
    res.status(200).json(cartItems);
  } catch (error) {
    console.error('Error fetching cart items:', error);
    res.status(500).json({ message: "Internal server error" });
  }
}
