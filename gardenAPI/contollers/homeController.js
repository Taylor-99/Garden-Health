
require('dotenv').config();
const router = require('express').Router();
const db  = require('../models');
const jwt = require('jsonwebtoken');

const verifyToken = require('../middleware/VerifyJWT')

// Define the challenges
const challenges = [
    { difficulty: 'Easy', description: 'Plant a Seed' },
    { difficulty: 'Easy', description: 'Weed for 10 Minutes' },
    { difficulty: 'Easy', description: 'Create a Small Herb Garden' },
    // Add more challenges here...
    { difficulty: 'Moderate', description: 'Start a Compost Bin' },
    { difficulty: 'Moderate', description: 'Create a Garden Bed' },
    // Continue adding challenges...
];

router.get('/getweather', verifyToken, async (req, res) =>{

    const userProfile = await db.UserProfile.findOne({ user: req.user.userID });

    let userCity = userProfile.city;

    // res.send("getting location")

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
        difficulty: challenges[challengeNum].difficulty,
        description: challenges[challengeNum].description,
        count: 0,
        completed: false,
        user: userId,
    }

    let createdChallenge = await db.Challenges.create(newChallenge);

    await createdChallenge.save()
}

router.get('/challenge', verifyToken, async (req, res) =>{

    const userChallenges = await db.Challenges.find({ user: req.user.userID });
    console.log(userChallenges.length)

    if(userChallenges.length === 0){
        createChallenge(0, req.user.userID)
    }else{

        for(c=0; c < userChallenges.length; c++){
    
            if(userChallenges[c].completed === true && c === (userChallenges.length - 1) ){
                // res.send("needs new Challenge");
                createChallenge((c+1), req.user.userID)
            }
            else if(userChallenges[c].completed === true){

            }else{
                res.send("need to complete Challenge");
            }
        }
    }

})

module.exports = router