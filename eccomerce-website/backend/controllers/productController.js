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

    // Fetch the product from the database based on name, price, and category
    const product = await Product.findOne({ name, price, category });

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    // Optionally, you can send the fetched product back to the client
    return res.status(200).json({ message: 'Product added to cart', product });
  } catch (error) {
    console.error('Error adding product to cart:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}