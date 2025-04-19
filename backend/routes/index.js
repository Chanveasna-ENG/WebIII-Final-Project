const express = require('express');
const router = express.Router();

// Import route handlers
const authRoutes = require('./authRoutes');
const menuRoutes = require('./menuRoutes');
const orderRoutes = require('./orderRoutes');


// API endpoints
router.use('/auth', authRoutes);
router.use('/menu', menuRoutes);
router.use('/orders', orderRoutes);
// Add other API endpoints

module.exports = router;