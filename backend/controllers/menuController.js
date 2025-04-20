// backend/controllers/menuController.js
const fs = require('fs');
const path = require('path');

exports.getMenu = async (req, res) => {
    try {
        const menuPath = path.join(__dirname, '../data/menu.json');
        const menuData = JSON.parse(fs.readFileSync(menuPath, 'utf-8'));
        res.json(menuData);
    } catch (error) {
        res.status(500).json({ error: 'Failed to load menu' });
    }
};