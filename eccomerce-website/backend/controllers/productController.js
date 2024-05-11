// controllers/productController.js

const Product = require('../models/Product');

// Controller function to search products
exports.searchProducts = async (req, res, next) => {
  try {
    const { query } = req.query;
    const products = await Product.find({ $text: { $search: query } });
    res.json(products);
  } catch (error) {
    next(error);
  }
};

// Controller function to filter products
exports.filterProducts = async (req, res, next) => {
  try {
    // Example filtering: filtering products with price greater than or equal to a certain value
    const { minPrice } = req.query;
    const products = await Product.find({ price: { $gte: minPrice } });
    res.json(products);
  } catch (error) {
    next(error);
  }
};
