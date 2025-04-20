const Order = require('../models/orderModel');
const { sendOrderConfirmation } = require('../utils/mail');

exports.createOrder = async (req, res) => {
    try {
        const { items, total } = req.body;
        
        // Validate cart items
        if (!Array.isArray(items) || items.length === 0) {
            return res.status(400).json({ error: 'Invalid cart items' });
        }

        // Create order
        const orderId = await Order.createOrder(req.user.id, items, total);
        
        // Simulate delivery (30 minutes)
        setTimeout(async () => {
            await sendOrderConfirmation(req.user.email, {
                orderId,
                total,
                estimatedDelivery: new Date(Date.now() + 30 * 60 * 1000)
            });
        }, 500); // Short delay for demo

        // Clear the cart cookie
        res.clearCookie('cart');

        res.json({ 
            success: true, 
            orderId,
            message: 'Order placed successfully. Delivery in ~30 minutes'
        });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getCart = async (req, res) => {
    try {
        // For logged-in users: merge cookie cart with DB cart
        const cart = req.cookies.cart ? JSON.parse(req.cookies.cart) : [];
        res.json(cart);
    } catch (error) {
        res.status(400).json({ error: 'Invalid cart data' });
    }
};

exports.updateCart = async (req, res) => {
    try {
        const { cart } = req.body;
        if (!Array.isArray(cart)) throw new Error('Invalid cart format');
        
        // Set cookie for 7 days
        res.cookie('cart', JSON.stringify(cart), { 
            maxAge: 7 * 24 * 60 * 60 * 1000,
            httpOnly: true
        });
        
        res.json({ success: true });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};