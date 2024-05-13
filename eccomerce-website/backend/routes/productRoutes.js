const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');


router.get('/', productController.getAllProducts);
router.post('/', productController.createProduct);
router.get('/:id', productController.getProductById);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

router.post('/products/add-to-cart', productController.addToCart);
router.get('/cart-items', productController.getCartItems);


module.exports = router;
