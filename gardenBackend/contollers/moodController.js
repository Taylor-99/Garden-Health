
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

async function cerateMood(userId, moodData) {

    const newMood = {
        overallMood: moodData.overallMood,
        energyLevel: moodData.energyLevel,
        stressLevel: moodData.stressLevel,
        journalEntry: moodData.journal,
        user:userId
    };

    const createdMood = await db.Mood.create(newMood);
    await createdMood.save();

    return createdMood;
};

async function createJournal(moodId, journalEntry) {

    const newEntry = {
        entry: journalEntry,
        mood: moodId
    };

    const createdEntry = await db.Journal.create(newEntry);
    await createdEntry.save();
}

// Create
router.post('/create', verifyToken, async (req, res) =>{

    try {

        const user = await db.User.findById(req.user.userID);

        if (!user) {
        return res.status(404).json({ message: "User not found" });
        }

        const mood = await createMood(req.user.userID, req.body);

        if(mood.journalEntry === true){

            await createJournal(mood._id, req.body.journalEntry);

        }

        return res.json({ message:'created Mood' })
        
    } catch (error) {
        console.error(error.message);
        res.status(400).send(error.message);
    }

});

// edit
router.get('/edit/:moodId', async(req, res) => {

    try {

        const mood = await db.Mood.findById(req.params.moodId);

        if (!mood) {
        return res.status(404).json({ message: "Mood not found" });
        }

        const journalEntry = await db.Journal.find({mood: req.params.moodId});

        let editMoodLog = [
            mood,
            journalEntry
        ];

        res.json(editMoodLog);
        
    } catch (error) {
        console.error(error.message);
        res.status(400).send(error.message);
    }

});

module.exports = router