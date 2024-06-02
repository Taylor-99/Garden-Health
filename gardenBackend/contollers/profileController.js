require('dotenv').config();
const router = require('express').Router();
const db  = require('../models');
const jwt = require('jsonwebtoken');

const verifyToken = require('../middleware/VerifyJWT')

//create profile
router.post('/createprofile', verifyToken, async (req, res) => {

    try {
        const user = await db.User.findById(req.user.userID);

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
            level: "Level 0 - Starter",
            favorite_plants: [],
            user: req.user.userID
        };

        let createdUser = await db.UserProfile.create(newUserProfile);

        await createdUser.save()

        return res.json({ message:'created user profile' })
    }catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Server error in controller" });
    }
});

// Show Profile

module.exports = router