const { query } = require('../config/db');

class Auth {
    static async findUserByEmail(email) {
        const [user] = await query(
            'SELECT * FROM users WHERE email = ?',
            [email]
        );
        return user;
    }

    static async createUser({ name, email, password, phone }) {
        // Fix: Added phone placeholder
        const result = await query(
            `INSERT INTO users (name, email, password, phone) 
            VALUES (?, ?, ?, ?)`,
            [name, email, password, phone]
        );
        return result;
    }

    static async saveResetToken(userId, token) {
        await query(
            'INSERT INTO password_resets (user_id, token) VALUES (?, ?)',
            [userId, token]
        );
    }
    
    static async validateResetToken(userId, token) {
        const [result] = await query(
            'SELECT * FROM password_resets WHERE user_id = ? AND token = ?',
            [userId, token]
        );
        return result;
    }
    
    static async deleteResetToken(userId) {
        await query(
            'DELETE FROM password_resets WHERE user_id = ?',
            [userId]
        );
    }
    
    static async updatePassword(userId, newPassword) {
        await query(
            'UPDATE users SET password = ? WHERE id = ?',
            [newPassword, userId]
        );
    }
}

module.exports = Auth;