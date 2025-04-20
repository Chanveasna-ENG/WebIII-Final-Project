const Contact = require('../models/contactModel');

exports.submitContact = async (req, res) => {
    try {
        const { name, email, message } = req.body;
        
        // Simple validation
        if (!name || !email || !message) {
            return res.status(400).json({ error: "All fields are required" });
        }

        // Save to database
        await Contact.createMessage(name, email, message);
        
        res.json({ success: true, message: "Message sent successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};