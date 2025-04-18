require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

// Database configuration
// const db = require('./config/db');
// db.connect();

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from public directory
app.use(express.static(path.join(__dirname, '../public')));

// Import routes
const routes = require('./routes');
app.use('/api', routes);

// Webpage page routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/home.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/contact.html'));
});

app.get('/*splat', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/404.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));