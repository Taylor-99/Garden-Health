
require('dotenv').config();
const router = require('express').Router();
const db  = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const verifyToken = require('../middleware/VerifyJWT');

// Show
router.get('/', verifyToken, async (req, res) => {

    try {

        const userActivity = await db.Activity.find({ user: req.user.userID})

        res.send(userActivity)
        
    } catch (error) {
        console.error(error.message);
        res.status(400).send(error.message);
    }

});

module.exports = router