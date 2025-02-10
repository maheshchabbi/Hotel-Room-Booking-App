const express = require('express');
const router = express.Router();
const authController = require('../../controllers/auth');
// const authMiddleware = require('../../middleware/auth');

// Test route to check if /api/auth is accessible
router.get('/', (req, res) => {
  res.json({ message: 'Auth route is working! 🚀' });
});

// Route to register a new user
router.post('/register', authController.register);

// Route to log in an existing user
router.post('/login', authController.login);

// Route to get user profile information
router.get('/profile', authController.profile);

// Route to add a hotel to user's wishlist
router.post('/addTowishlist', authController.addTowishlist);

// Route to remove a hotel from user's wishlist
router.post('/removeFromWishlist', authController.removeFromWishlist);

module.exports = router;
