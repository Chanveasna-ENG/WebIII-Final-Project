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

// Export the pool for use in other modules
module.exports = pool;

// ./config/db.js