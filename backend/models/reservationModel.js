const { query } = require('../config/db');

class Reservation {
    static async create({ name, phone, date, time, people, table, requests }) {
        const result = await query(
            `INSERT INTO reservations 
            (name, phone, reservation_date, reservation_time, people, table_id, requests)
            VALUES (?, ?, ?, ?, ?, ?, ?)`,
            [name, phone, date, time, people, table, requests || '']
        );
        return result.insertId;
    }

    static async getAll() {
        return await query(
            `SELECT * FROM reservations ORDER BY created_at DESC`
        );
    }
}

module.exports = Reservation;