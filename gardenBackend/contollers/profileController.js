
// Load environment variables from .env file
require('dotenv').config();

// Import required modules
const router = require('express').Router();
const db  = require('../models');

const verifyToken = require('../middleware/VerifyJWT');

//create profile
router.post('/createprofile', verifyToken, async (req, res) => {

    try {
        // Find the user by ID
        const user = await db.User.findById(req.user.userID);

        // Return 404 status with a message if user is not found
        if (!user) {
        return res.status(404).json({ message: "User not found" });
        };

        // Create a new user profile object
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

        // Create the user profile
        let createdUser = await db.UserProfile.create(newUserProfile);

        // Return success message
        await createdUser.save();

        return res.json({ message:'created user profile' })
    }catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Server error in controller" });
    }
});

// Show Profile
router.get('/', verifyToken, async (req, res) => {
    try {
        // Find the user profile by user ID
        const userProfile = await db.UserProfile.find({ user: req.user.userID})

        // Send the user profile as a response
        res.send(userProfile);
        
    } catch (error) {
        console.error("Error getting Profile:", error.message);
        res.status(500).json({ message: 'Internal server error' });
    }

});

module.exports = router