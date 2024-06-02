
require('dotenv').config();
const router = require('express').Router();
const db  = require('../models');
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

// Delete 
router.delete('/:activeId', async (req, res) =>{
    await db.Activity.findByIdAndDelete( req.params.activeId );
});

// Update
router.put('/:activityId', async (req, res) => {

    try{

        await db.Mood.findByIdAndUpdate(
            req.params.activityId, 
            req.body,
        );

    }catch (error) {
        console.error(error.message);
        res.status(400).send(error.message);
    }

});

async function createActivity(activityId, activityData) {

    const newActivity = {
        activity: activityData.activity,
        duration: activityData.duration,
        outdoors: activityData.outdoors,
        activity_mood: activityData.aMood,
        user: activityId,
    };

    const createdActivity = await db.Activity.create(newActivity);
    await createdActivity.save();
};

// Create 
router.post('/create', verifyToken, async (req, res) =>{

    try {

        const user = await db.User.findById(req.user.userID);

        if (!user) {
        return res.status(404).json({ message: "User not found" });
        }

        await createActivity(req.user.userID, req.body);

        return res.json({ message:'created Activity' })
        
    } catch (error) {
        console.error(error.message);
        res.status(400).send(error.message);
    }

});

// Edit
router.get('/edit/:activityId', async(req, res) => {

    try {

        const activity = await db.Activity.findById(req.params.activityId);

        if (!activity) {
        return res.status(404).json({ message: "Activity not found" });
        }

        res.json(activity);
        
    } catch (error) {
        console.error(error.message);
        res.status(400).send(error.message);
    }

});

module.exports = router