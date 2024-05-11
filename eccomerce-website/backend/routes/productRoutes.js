// routes/productRoutes.js

const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Route to search products
router.get('/search', productController.searchProducts);

// Route to filter products
router.get('/filter', productController.filterProducts);

module.exports = router;
