
require('dotenv').config();
const router = require('express').Router();
const db  = require('../models');
const jwt = require('jsonwebtoken');

const verifyToken = require('../middleware/VerifyJWT')
const challengesData = require('../data/challenges')
const remindersData = require('../data/reminders')

async function fetchLocationData(city) {
    const locationAPIResponse = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${process.env.Weather_API}`);
    if (!locationAPIResponse.ok) {
        throw new Error(`API request failed: ${locationAPIResponse.statusText}`);
    }
    const locationData = await locationAPIResponse.json();
    if (locationData.length === 0) {
        throw new Error('No location data found');
    }
    return locationData[0];
}

async function fetchWeatherData(lat, lon) {
    const weatherAPIResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.Weather_API}`);
    if (!weatherAPIResponse.ok) {
        throw new Error(`API request failed: ${weatherAPIResponse.statusText}`);
    }
    return weatherAPIResponse.json();
}

router.get('/getweather', verifyToken, async (req, res) =>{

    try{

        const userProfile = await db.UserProfile.findOne({ user: req.user.userID });

        let userCity = userProfile.city;

        const locationData = await fetchLocationData(userCity);
        const { lat, lon } = locationData;
        const weatherData = await fetchWeatherData(lat, lon);

        res.json(weatherData);

    }catch (error) {
        // Log error and throw it up the chain
        console.error("Error fetching data from API:", error);
        throw error;
      }
});

async function createChallenge (challengeNum, userId){
    let newChallenge = {
        challengeNumber: challengeNum,
        difficulty: challengesData[challengeNum].difficulty,
        description: challengesData[challengeNum].description,
        count: 0,
        completed: false,
        user: userId,
    }

    let createdChallenge = await db.Challenges.create(newChallenge);

    await createdChallenge.save();

    return createdChallenge;
};

async function getOrCreateChallenge(userId) {

    const userChallenges = await db.Challenges.find({ user: userId});
    console.log(userChallenges.length)

    if(userChallenges.length === 0){
        const firstChallenge = createChallenge(0, userId)
        console.log('first challenge created')
        return (firstChallenge)
    }else {

        let needsNewChallenge = true;
        let today = new Date()
        let lastChallenge = userChallenges[userChallenges.length - 1]
    
        const isSameDay = 
        (lastChallenge.createdAt.getDate() === today.getDate() &&
        lastChallenge.createdAt.getMonth() === today.getMonth() &&
        lastChallenge.createdAt.getFullYear() === today.getFullYear()) || 
        (lastChallenge.updatedAt.getDate() === today.getDate() &&
        lastChallenge.updatedAt.getMonth() === today.getMonth() &&
        lastChallenge.updatedAt.getFullYear() === today.getFullYear());
    
    
        for(let c=0; c < userChallenges.length; c++){
    
            if (!userChallenges[c].completed) {
                needsNewChallenge = false;
                console.log('need to complete challenge');
                return(userChallenges[c]);
            }
            else if(needsNewChallenge && !isSameDay) {
                let newChallenge = await createChallenge(userChallenges.length, userId);
                console.log("new challenge for today");
                return(newChallenge);
            }else{
                console.log("already completed the challenge for today")
                return {message: "already completed the challenge for today"}
            }
        }
    }
    
};

router.get('/challenge', verifyToken, async (req, res) =>{

    try {
        const challenge = await getOrCreateChallenge(req.user.userID);
        res.json(challenge);
    } catch (error) {
        console.error(error.message);
        res.status(400).send(error.message);
    }
});

async function createReminder(reminder, userId){

    let newReminder = {
        message: reminder.message,
        model: reminder.model,
        repeat: reminder.repeat,
        completed: false,
        user: userId,
    }

    let createdReminder = await db.Reminder.create(newReminder);

    await createdReminder.save();

}

async function checkForReminders(userID){

    let getReminders = await db.Reminder.find({ user: userID})
    let plants = await db.Plant.find({ user: userID})

    if( getReminders.length === 0){
        for(let r = 0; r < remindersData.length; r++){
            if(remindersData[r].model !== "Plant"){
                createReminder(remindersData[r], userID)
            }
        }

        let newReminders = await db.Reminder.find({ user: userID})

        return newReminders

    }
    else if(plants.length !== 0){
        for(let m = 0; m < remindersData.length; m++){
            if(remindersData[m].model === "Plant"){
                // Check if a reminder for plant model already exists
                const existingPlantReminder = await db.Reminder.findOne({
                    user: userID,
                    message: getReminders[m].message
                });
                
                // If reminder doesn't exist, create it
                if (!existingPlantReminder) {
                    createReminder(remindersData[m], userID);
                };
            };
        };

        let newRemindersWithPlants = await db.Reminder.find({ user: userID})

        return newRemindersWithPlants

    }else{
        let notComplete = []

        for(let c = 0; c < getReminders.length; c++){
            if (getReminders[c].completed === false){
                notComplete.push(getReminders[c])
            }
        }

        return notComplete
    }
};

router.get('/reminders', verifyToken, async (req, res) =>{

    try {

        const reminders = await checkForReminders(req.user.userID)
        res.json(reminders)
        
    } catch (error) {
        console.error(error.message);
        res.status(400).send(error.message);
    }
});

module.exports = router