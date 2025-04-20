const express = require('express');
const router = express.Router();

// Import route handlers
const authRoutes = require('./authRoutes');
const contactRoutes = require('./contactRoutes');
const menuRoutes = require('./menuRoutes');
// const reservationRoutes = require('./reservationRoutes')
// const orderRoutes = require('./orderRoutes');

// API endpoints
router.use('/auth', authRoutes);
router.use('/contact', contactRoutes);
router.use('/menu', menuRoutes);
// router.use('/reservation', reservationRoutes);
// router.use('/orders', orderRoutes);

module.exports = router;