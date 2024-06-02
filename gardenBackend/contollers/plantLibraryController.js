
require('dotenv').config();
const router = require('express').Router();
const db  = require('../models');
const jwt = require('jsonwebtoken');

const verifyToken = require('../middleware/VerifyJWT');

async function fetchPlantList(pageNum) {

    // let pageNumber = Math.floor(Math.random() * (405 - 1 + 1) + 1)

    const plantAPIResponse = await fetch(`https://trefle.io/api/v1/plants?token=${process.env.Plant_API}&page=${pageNum}`);

    if (!plantAPIResponse.ok) {
        throw new Error(`API request failed: ${plantAPIResponse.statusText}`);
    }
    const plantData = await plantAPIResponse.json();
    if (!plantData.data || plantData.length === 0) {
        throw new Error('No plant data found');
    }
    return plantData;
};

async function fetchPlantDetails(sName) {

    const plantAPIResponse = await fetch(`https://trefle.io/api/v1/plants?token=${process.env.Plant_API}&filter[scientific_name]=${sName}`);

    if (!plantAPIResponse.ok) {
        throw new Error(`API request failed: ${plantAPIResponse.statusText}`);
    }
    const plantData = await plantAPIResponse.json();
    if (!plantData.data || plantData.length === 0) {
        throw new Error('No plant data found');
    }
    return plantData;
};

async function fetchPlantSearch(searchTerm, page) {

    const plantAPIResponse = await fetch(`https://trefle.io/api/v1/plants/search?token=${process.env.Plant_API}&q=${searchTerm}&page${page}`);

    if (!plantAPIResponse.ok) {
        throw new Error(`API request failed: ${plantAPIResponse.statusText}`);
    }
    const plantData = await plantAPIResponse.json();
    if (!plantData.data || plantData.length === 0) {
        throw new Error('No plant data found');
    }
    return plantData;
};

// show
router.get('/getplants', verifyToken, async (req, res) =>{

    try{

        const page = req.query.page ? parseInt(req.query.page, 10) : 1; // Default to page 1 if not provided
        const plantData = await fetchPlantList(page);
        res.json(plantData);

    }catch (error) {
        // Log error and throw it up the chain
        console.error("Error fetching data from API:", error);
        throw error;
      }
});

// Show
router.get('/detail/:sName', verifyToken, async (req, res) =>{

    try{
        const plantDetails = await fetchPlantDetails(req.params.sName);
        res.json(plantDetails);

    }catch (error) {
        // Log error and throw it up the chain
        console.error("Error fetching data from API:", error);
        throw error;
      }
});

// Show
router.get('/search/:searchTerm', verifyToken, async (req, res) =>{

    try{
        const page = req.query.page ? parseInt(req.query.page, 10) : 1; // Default to page 1 if not provided

        const plantSearch = await fetchPlantSearch(req.params.searchTerm, page);
        res.json(plantSearch);

    }catch (error) {
        // Log error and throw it up the chain
        console.error("Error fetching data from API:", error);
        throw error;
      }
});

// Update
router.get('/favorites/:sName', verifyToken, async (req, res) => {

    try{

        const userProfile = await db.UserProfile.findOne({ user: req.user.userID });

        if (!userProfile) {
            return res.status(404).json({ message: "User profile not found" });
        }

        if (!userProfile.favorite_plants) {
            userProfile.favorite_plants = [];
        }

        // Check if the plant is already in the favorites
        if (!userProfile.favorite_plants.includes(req.params.sName)) {
            userProfile.favorite_plants.push(req.params.sName);
            await userProfile.save();
        }

        res.send(userProfile)

    }catch (error) {
        console.error("Error adding to favorite plants:", error);
        res.status(500).json({ message: "Internal server error" });
    }

});

// Delete
router.delete('/favorites/:sName', verifyToken, async (req, res) => {
    try {
        const userProfile = await db.UserProfile.findOne({ user: req.user.userID });

        if (!userProfile) {
            return res.status(404).json({ message: "User profile not found" });
        }

        if (!userProfile.favorite_plants) {
            userProfile.favorite_plants = [];
        }

        // Remove the plant from the favorites
        userProfile.favorite_plants = userProfile.favorite_plants.filter(
            (plant) => plant !== req.params.sName
        );

        await userProfile.save();

        res.json(userProfile);

    } catch (error) {
        console.error("Error removing from favorite plants:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});


module.exports = router