
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
        console.error("Error getting Activity:", error.message);
        res.status(500).json({ message: 'Internal server error' });
    }

});

// Delete 
router.delete('/:activeId', async (req, res) =>{
    try{
        // Delete the activity
        const deletedActivity = await db.Activity.findByIdAndDelete( req.params.activeId );
        if (!deletedActivity) {
            return res.status(404).json({ message: 'Activity not found' });
        }

        res.status(200).json({ message: 'Activity deleted successfully' });

    }catch (error) {
        console.error("Error deleting activity:", error.message);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Update
router.put('/:activityId', async (req, res) => {

    try{

        await db.Mood.findByIdAndUpdate(
            req.params.activityId, 
            req.body,
        );

    }catch (error) {
        console.error("Error updating activity:", error.message);
        res.status(400).json({ message: error.message });
    }

});

async function createActivity(userId, activityData) {

    const newActivity = {
        activity: activityData.activity,
        duration: activityData.duration,
        outdoors: activityData.outdoors,
        activity_mood: activityData.aMood,
        user: userId,
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

        return res.status(201).json({ message: 'Activity created successfully', post: createdPost });
        
    } catch (error) {
        console.error("Error creating activity:", error.message);
        res.status(400).json({ message: error.message });
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
        console.error("Error fetching activity:", error.message);
        res.status(400).json({ message: error.message });
    }

});

module.exports = router