const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Route for user sign up
router.post('/signup', authController.signup);
router.post('/login', authController.login); 

// Route for fetching user details
router.get('/me', authController.getUserDetails); // Removed .me from here

// Route for updating user details
router.put('/me', authController.updateUserDetails); 

// Route for updating user password
router.put('/me/password', authController.updatePassword);

// Route for updating profile picture
router.post('/me/profile-picture', authController.uploadProfilePicture);

module.exports = router;
