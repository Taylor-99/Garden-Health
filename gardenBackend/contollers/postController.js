
require('dotenv').config();
const router = require('express').Router();
const jwt = require('jsonwebtoken');
const verifyToken = require('../middleware/VerifyJWT');

module.exports = router