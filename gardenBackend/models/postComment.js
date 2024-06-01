
const mongoose = require('mongoose');

const postCommentSchema = new mongoose.Schema({
    reply: { 
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
        ref: 'CommunityPost'
    },

}, {timestamps: true});

module.exports = mongoose.model('PostComment', postCommentSchema);