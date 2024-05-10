// backend/routes/authRoutes.js

const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Route for user sign up
router.post('/signup', authController.signup);

module.exports = router;
