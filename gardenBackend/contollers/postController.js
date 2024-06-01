
require('dotenv').config();
const router = require('express').Router();
const db  = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const verifyToken = require('../middleware/VerifyJWT');

module.exports = router