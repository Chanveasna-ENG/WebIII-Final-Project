const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const authMiddleware = require('../middleware/authMiddleware');

// Public routes
router.get('/cart', orderController.getCart);
router.post('/cart', orderController.updateCart);

// Protected routes
router.post('/submit', authMiddleware.verifyUser, orderController.createOrder);

module.exports = router;