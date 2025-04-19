require('dotenv').config();

const mysql2 = require('mysql2/promise')

const pool = mysql2.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    timezone: '+07:00',
});

const query = async (sql, params) => {
    const [rows] = await pool.execute(sql, params);
    return rows;
};

module.exports = {
    pool,
    query
};