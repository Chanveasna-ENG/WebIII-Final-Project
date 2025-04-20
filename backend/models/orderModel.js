const { query } = require('../config/db');

class Order {
    static async createOrder(userId, items, total) {
        const result = await query(
            'INSERT INTO orders (user_id, items, total_price) VALUES (?, ?, ?)',
            [userId, JSON.stringify(items), total]
        );
        return result.insertId;
    }

    static async getOrderHistory(userId) {
        return await query(
            'SELECT * FROM orders WHERE user_id = ? ORDER BY order_time DESC',
            [userId]
        );
    }
}

module.exports = Order;