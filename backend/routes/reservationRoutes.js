// backend/routes/orderRoutes.js
const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const reservationController = require('../controllers/reservationController');

router.post('/',
    authMiddleware.verifyUser,
    reservationController.createReservation,
);

module.exports = router;