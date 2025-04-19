const express = require('express');
const router = express.Router();

// Import route handlers
const authRoutes = require('./authRoutes');
// const reservationRoutes = require('./reservationRoutes')
// const orderRoutes = require('./orderRoutes');

// API endpoints
router.use('/auth', authRoutes);
// router.use('/reservation', reservationRoutes);
// router.use('/orders', orderRoutes);

module.exports = router;