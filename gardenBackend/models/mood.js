
const mongoose = require('mongoose');

const moodSchema = new mongoose.Schema({
    overallMood: { 
        type: String, 
    },
    energyLevel: { 
        type: String, 
    },
    stressLevel: { 
        type: String, 
    },
    journalEntry: { 
        type: Boolean, 
    },
    user:{
        type: mongoose.Types.ObjectId, 
        ref: 'User'
    },

}, {timestamps: true});

module.exports = mongoose.model('Mood', moodSchema);