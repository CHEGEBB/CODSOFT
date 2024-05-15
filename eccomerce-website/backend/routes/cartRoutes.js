const express = require('express');
const router = express.Router();
const Product = require('../models/Product'); // Ensure you have the Product model

// Route to handle adding item to cart
router.get('/add-to-cart/:name/:price/:category', async (req, res) => {
    try {
        const { name, price, category } = req.params;
        const product = await Product.findOne({ 
            name: decodeURIComponent(name), 
            price: parseFloat(price), 
            category: decodeURIComponent(category) 
        });

        if (product) {
            res.status(200).json(product);
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        console.error('Error fetching product:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
