
const mongoose = require('mongoose');

const communityPostSchema = new mongoose.Schema({
    post: { 
        type: String, 
    },
    image: { 
        type: String, 
    },
    likes: { 
        type: Number, 
    },
    user:{
        type: mongoose.Types.ObjectId, 
        ref: 'User'
    },

}, {timestamps: true});

module.exports = mongoose.model('CommunityPost', communityPostSchema);