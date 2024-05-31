
const mongoose = require('mongoose');

const plantUpdateSchema = new mongoose.Schema({
    images: { 
        type: String,
        },
    notes: { 
        type: String, 
        },
    plant:{
        type: mongoose.Types.ObjectId, 
        ref: 'Plant'
    },

}, {timestamps: true});

module.exports = mongoose.model('PlantUpdate', plantUpdateSchema);