
require('dotenv').config();
const router = require('express').Router();
const db  = require('../models');

const verifyToken = require('../middleware/VerifyJWT');

// Show
router.get('/', verifyToken, async (req, res) => {

    try {

        const posts = await db.CommunityPost.find()

        res.send(posts)
        
    } catch (error) {
        console.error("Error getting Posts:", error.message);
        res.status(500).json({ message: 'Internal server error' });
    }

});

// Delete Post
router.delete('/:postId', async (req, res) =>{
    try{

        let post = db.CommunityPost.findById(req.params.postId);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        };

        if(req.user.userID !== post.user){
            return res.status(403).json({ message: 'Unauthorized to delete this post' });
        };

        // Delete the post
        await db.CommunityPost.findByIdAndDelete( req.params.postId );

        res.status(200).json({ message: 'Post deleted successfully' });

    }catch (error) {
        console.error("Error deleting Post:", error.message);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router