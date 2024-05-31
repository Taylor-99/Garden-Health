
require('dotenv').config();
const router = require('express').Router();
const db  = require('../models');
const jwt = require('jsonwebtoken');

const verifyToken = require('../middleware/VerifyJWT')
const challengesData = require('../data/challenges')



router.get('/getweather', verifyToken, async (req, res) =>{

    const userProfile = await db.UserProfile.findOne({ user: req.user.userID });

    let userCity = userProfile.city;


    try{
        const locationAPIResponse = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${userCity}&limit=1&appid=${process.env.Weather_API}`)

        if (!locationAPIResponse.ok) {
            throw new Error(`API request failed: ${locationAPIResponse.statusText}`);
        }

        // Parse the response body as JSON
        const locationData = await locationAPIResponse.json();

        // res.send(locationData[0]);

        let lat = locationData[0].lat
        let lon = locationData[0].lon

        const weatherAPIResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.Weather_API}`)

        if (!weatherAPIResponse.ok) {
            throw new Error(`API request failed: ${weatherAPIResponse.statusText}`);
        }

        // Parse the response body as JSON
        const weatherData = await weatherAPIResponse.json();
        res.json(weatherData)


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
}

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
        res.send(challenge);
    } catch (error) {
        console.error(error.message);
        res.status(400).send(error.message);
    }
});



module.exports = router