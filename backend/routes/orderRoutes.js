// backend/routes/orderRoutes.js
const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const orderController = require('../controllers/orderController');

router.post('/',
    authMiddleware.verifyUser,
    orderController.createOrder
);

module.exports = router;