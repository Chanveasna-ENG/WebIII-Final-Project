const { query } = require('../config/db');

class Contact {
    static async createMessage(name, email, message) {
        await query(
            'INSERT INTO contact_messages (name, email, message) VALUES (?, ?, ?)',
            [name, email, message]
        );
    }
}

module.exports = Contact;