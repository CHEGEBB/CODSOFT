// authRoutes.js

const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Route for user sign up
router.post('/signup', authController.signup);
router.post('/login', authController.login); 
// Route for admin login
router.post('/admin', authController.adminLogin);

module.exports = router;
