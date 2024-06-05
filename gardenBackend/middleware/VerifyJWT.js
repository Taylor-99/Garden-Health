
require('dotenv').config();
const jwt = require('jsonwebtoken');


const verifyToken = (req, res) => {

    // const token = req.cookies.token;
    const token = req.headers.authorization

    console.log('Verify token = ', token)

    if (!token) {
        return res.status(401).json({ message: 'Access Denied' });
    }
    try {
        const verified = jwt.verify(token, process.env.SECRET);
        req.user = verified;
        next();

    } catch (err) {
        res.status(400).json({ message: 'Invalid Token' });
    }
};

module.exports = verifyToken