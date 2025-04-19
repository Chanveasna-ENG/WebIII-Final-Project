// backend/middleware/authMiddleware.js
const jwt = require('jsonwebtoken');

exports.verifyUser = async (req, res, next) => {
    try {
        // 1. Check for token in cookies or headers
        const token = req.cookies?.jwt || req.headers.authorization?.split(' ')[1];
        
        if (!token) {
            return res.status(401).json({ 
                error: 'Unauthorized - Please login first',
                redirect: '/login' 
            });
        }

        // 2. Verify JWT
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        // 3. Attach user to request
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({
            error: 'Invalid or expired token',
            redirect: '/login'
        });
    }
};