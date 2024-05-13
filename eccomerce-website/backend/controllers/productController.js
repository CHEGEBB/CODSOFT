// backend/controllers/productController.js
const Product = require('../models/Product');

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createProduct = async (req, res) => {
  const product = new Product({
    name: req.body.name,
    category : req.body.category,
    price: req.body.price,
    discountedPrice: req.body.discountedPrice,
    rating: req.body.rating,
    images: req.body.images
  });

  try {
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch (err) {
    res.status(404).json({ message: 'Product not found' });
  }
}

exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (req.body.name) {
      product.name = req.body.name;
    }
    if (req.body.category) {
      product.category = req.body.category;
    }
    if (req.body.price) {
      product.price = req.body.price;
    }
    if (req.body.discountedPrice) {
      product.discountedPrice = req.body.discountedPrice;
    }
    if (req.body.rating) {
      product.rating = req.body.rating;
    }
    if (req.body.images) {
      product.images = req.body.images;
    }

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } catch (err) {
    res.status(404).json({ message: 'Product not found' });
  }
}

exports.deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: 'Product deleted' });
  }
  catch (err) {
    res.status(404).json({ message: 'Product not found' });
  }
}

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
