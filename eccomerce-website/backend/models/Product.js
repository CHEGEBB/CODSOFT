// models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  discountedPrice: Number,
  rating: Number,
  images: [String] // Assuming image paths are stored as strings
});

module.exports = mongoose.model('Product', productSchema);
