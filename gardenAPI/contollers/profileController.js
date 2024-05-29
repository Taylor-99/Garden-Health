require('dotenv').config();
const router = require('express').Router();
const db  = require('../models');
const jwt = require('jsonwebtoken');

// Middleware to verify token
const verifyToken = (req, res, next) => {
    const token = req.cookies.token;

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

//create profile
router.post('/createprofile', verifyToken, async (req, res) => {

    try {
        const user = await db.User.findById(data.userID);
        console.log(user)

        if (!user) {
        return res.status(404).json({ message: "User not found" });
        }

        let newUserProfile = {
            firstName: req.body.fName,
            lastName: req.body.lName,
            username: user.username,
            image: req.body.image,
            city: req.body.city,
            state: req.body.state,
            gardeningExperience: req.body.gExperience,
            activityExperience: req.body.aExperience,
            bio: req.body.bio,
            user: data.userID
        };

        let createdUser = await db.UserProfile.create(newUserProfile);

        await createdUser.save()

        return res.json({ message:'created user profile' })
    }catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Server error in controller" });
    }
});

module.exports = router