
const mongoose = require('mongoose');

const plantSchema = new mongoose.Schema({
  plantName: { 
    type: String, 
    unique: true, 
    required: true 
    },
  plantType: { 
    type: String, 
    },
    user:{
        type: mongoose.Types.ObjectId, 
        ref: 'User'
    },

}, {timestamps: true});

module.exports = mongoose.model('Plant', plantSchema);