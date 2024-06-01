
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

router.get('/getplants/detail/:sName', verifyToken, async (req, res) =>{

    try{
        const plantDetails = await fetchPlantDetails(req.params.sName);
        res.json(plantDetails);

    }catch (error) {
        // Log error and throw it up the chain
        console.error("Error fetching data from API:", error);
        throw error;
      }
});



module.exports = router