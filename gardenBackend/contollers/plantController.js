
require('dotenv').config();
const router = require('express').Router();
const db  = require('../models');
const jwt = require('jsonwebtoken');

const verifyToken = require('../middleware/VerifyJWT');


router.get('/garden', verifyToken, async (req, res) =>{

    try {

        const userPlants = await db.Plant.find({ user: req.user.userID})

        if(userPlants.length !== 0){

            let updateList = [];

            for(const plant of userPlants){
                const userPlantUpdates = await db.PlantUpdate.find({ plant: plant._id}).sort({ createdAt: -1 });

                let lastUpdate = userPlantUpdates.length > 0 ? userPlantUpdates[0] : null;

                updateList.push([
                    plant,
                    lastUpdate
                ]);
            };

            res.json(updateList);

        }
        
    } catch (error) {
        console.error(error.message);
        res.status(400).send(error.message);
    }

});

router.get('/details/:plantID', verifyToken, async (req, res) =>{

    try {

        const plant = await db.Plant.findById(req.params.plantID)

        const plantUpdates = await db.PlantUpdate.find({ plant: req.params.plantID});

        let plantDetails = [
            plant,
            plantUpdates
        ];

        res.json(plantDetails)
        
    } catch (error) {
        console.error(error.message);
        res.status(400).send(error.message);
    }

});

router.get('/water/:plantID', verifyToken, async (req, res) =>{

    try {

        const plant = await db.Plant.findById(req.params.plantID);

        if (!plant) {
            return res.status(404).send("Plant not found");
        }

        plant.watered = true;

        await plant.save(); // Save the updated plant
        
    } catch (error) {
        console.error(error.message);
        res.status(400).send(error.message);
    }

});

async function createNewPlant(userId, plantData) {
    const newPlant = {
        plantName: plantData.plantName,
        plantSpecies: plantData.plantSpecies,
        watered: plantData.watered,
        plantDate: plantData.plantDate,
        user: userId
    };

    const createdPlant = await db.Plant.create(newPlant);
    await createdPlant.save();

    return createdPlant._id;
};

async function createNewPlantUpdate(plantId, updateData) {

    const newPlantUpdate = {
        plantImage: updateData.plantImage,
        temperature: updateData.temperature,
        rain: updateData.rain,
        health: updateData.health,
        fertilizer: updateData.fertilizer,
        notes: updateData.notes,
        plant: plantId,
    };

    const createdUpdate = await db.PlantUpdate.create(newPlantUpdate);
    await createdUpdate.save();
}

router.post('/create', verifyToken, async (req, res) =>{

    try {

        const user = await db.User.findById(req.user.userID);

        if (!user) {
        return res.status(404).json({ message: "User not found" });
        }

        const plantId = await createNewPlant(req.user.userID, req.body);

        await createNewPlantUpdate(plantId, req.body);

        return res.json({ message:'created plant' })
        
    } catch (error) {
        console.error(error.message);
        res.status(400).send(error.message);
    }

});

router.post('/update/:plantId', verifyToken, async (req, res) =>{

    try {

        await createNewPlantUpdate(req.params.plantId, req.body);

        return res.json({ message:'plant updated' })
        
    } catch (error) {
        console.error(error.message);
        res.status(400).send(error.message);
    }

});

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