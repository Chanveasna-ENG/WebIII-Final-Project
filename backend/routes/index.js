const express = require('express');
const router = express.Router();

// Import route handlers
const authRoutes = require('./authRoutes');
const contactRoutes = require('./contactRoutes');
const menuRoutes = require('./menuRoutes');
const orderRoutes = require('./orderRoutes');
// const reservationRoutes = require('./reservationRoutes')

// API endpoints
router.use('/auth', authRoutes);
router.use('/contact', contactRoutes);
router.use('/menu', menuRoutes);
router.use('/orders', orderRoutes);
// router.use('/reservation', reservationRoutes);

module.exports = router;