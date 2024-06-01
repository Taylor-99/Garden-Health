
require('dotenv').config();
const router = require('express').Router();
const db  = require('../models');

const verifyToken = require('../middleware/VerifyJWT');

// Show
router.get('/', verifyToken, async (req, res) => {

    try {

        const userMoods = await db.Mood.find({ user: req.user.userID})

        res.send(userMoods)
        
    } catch (error) {
        console.error(error.message);
        res.status(400).send(error.message);
    }

});

// Delete
router.delete('/:moodId', async (req, res) =>{
    await db.Mood.findByIdAndDelete( req.params.moodId );
    await db.Journal.findOneAndDelete( { mood: req.params.moodId });
});

module.exports = router