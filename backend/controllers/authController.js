// backend/controllers/authController.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Auth = require('../models/authModel');
const mail = require('../utils/mail')

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log('Login attempt for:', email); // Debugging
        
        const user = await Auth.findUserByEmail(email);
        console.log('Found user:', user); // Debugging

        if (!user) {
            console.log('No user found');
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        console.log('Stored hash:', user.password); // Debugging
        const validPass = await bcrypt.compare(password, user.password);
        console.log('Password valid:', validPass); // Debugging

        if (!validPass) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const token = jwt.sign(
            { id: user.id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRES_IN }
        );

        res.cookie('jwt', token, {
            httpOnly: true,
            maxAge: 3600000, // 1 hour
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'Lax',
            domain: process.env.NODE_ENV === 'development' ? '127.0.0.1' : '127.0.0.1',
            path: '/',
        });

        res.json({ message: 'Login successful', user: { id: user.id, name: user.name } });

    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ error: error.message });
    }
};

exports.register = async (req, res) => {
    try {
        const { fullname, phone, password, confirmPassword } = req.body;

        // Validation
        if (password !== confirmPassword) {
            return res.status(400).json({ error: 'Passwords do not match' });
        }

        // Hash password
        const hashedPass = await bcrypt.hash(password, 12);
        
        // Create user
        const newUser = await Auth.createUser({
            name: fullname,
            email: req.body.email, // Add email field to your form if needed
            password: hashedPass,
            phone: phone,
        });

        res.status(201).json({ message: 'Registration successful' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.logout = (req, res) => {
    res.clearCookie('jwt');
    res.json({ message: 'Logged out successfully' });
};


exports.checkAuth = async (req, res) => {
    try {
        const token = req.cookies?.jwt;
        if (!token) return res.status(401).json({ authenticated: false });

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        // Get user details from DB
        const user = await Auth.findUserById(decoded.id);
        if (!user) throw new Error('User not found');

        res.json({ 
            authenticated: true,
            user: {
                name: user.name,
                email: user.email
            }
        });
    } catch (error) {
        res.status(401).json({ authenticated: false });
    }
};

exports.forgotPassword = async (req, res) => {
    try {
        const { email } = req.body;
        const user = await Auth.findUserByEmail(email);
        
        if (!user) return res.status(200).json({ message: 'Reset email sent if account exists' });

        // Generate reset token (1 hour expiry)
        const resetToken = jwt.sign(
            { id: user.id },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        // Save token to database
        await Auth.saveResetToken(user.id, resetToken);

        // Send email
        const resetUrl = `${process.env.CLIENT_URL}/change_password.html?token=${resetToken}`;
        // In your forgotPassword controller
        console.log('Using redirect URI:', process.env.CLIENT_URL);
        await mail.sendResetEmail(user.email, resetUrl);

        res.json({ message: 'Reset email sent' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.resetPassword = async (req, res) => {
    try {
        const { token } = req.params;
        const { password } = req.body;

        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        // Check if token exists in DB
        const validToken = await Auth.validateResetToken(decoded.id, token);
        if (!validToken) throw new Error('Invalid or expired token');

        // Update password
        const hashedPass = await bcrypt.hash(password, 12);
        await Auth.updatePassword(decoded.id, hashedPass);

        // Delete used token
        await Auth.deleteResetToken(decoded.id);

        res.json({ message: 'Password updated successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};