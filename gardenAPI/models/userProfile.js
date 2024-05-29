

const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    firstName: {
        type: String, 
        required: true
    },
    lastName: {
        type: String,
    },
    username: {
        type: String
    },
    image: {
        type: String,
    },
    city: {
        type: String,
    },
    state: {
        type: String,
    },
    gardeningExperience: {
        type: String,
    },
    activityExperience: {
        type: String,
    },
    bio: {
        type: String,
    },
    level: {
        type: String,
    },
    user:{
        type: mongoose.Types.ObjectId, 
        ref: 'User'
    }
});

module.exports = mongoose.model("UserProfile", profileSchema);