
require('dotenv').config();
const router = require('express').Router();
const db  = require('../models');

const verifyToken = require('../middleware/VerifyJWT');

// Show - Posts
router.get('/', verifyToken, async (req, res) => {

    try {
        
        // Retrieve all posts
        const posts = await db.CommunityPost.find()

        // Array to store post information with user details
        postsInfo = []
        
        // Iterate through each post to fetch user details
        for(const post in posts){

            const userProfile = await db.UserProfile.find({ user: post.user });

            if (!userProfile) {
                console.warn(`User profile not found for post ID ${post._id}`);
                continue;
            }

            // Extract relevant information and add to postsInfo array
            postsInfo.push({
                pic: userProfile.image,
                username: userProfile.username,
                post
            });

        }

        res.send(postsInfo)
        
    } catch (error) {
        console.error("Error getting Posts:", error.message);
        res.status(500).json({ message: 'Internal server error' });
    }

});

// Show - replies
router.get('/:postId', verifyToken, async (req, res) => {

    try {
        
        // Retrieve all replies for post
        const replies = await db.PostComment.find( {post: req.params.postId})

        // Array to store reply information with user details
        repliesInfo = []
        
        // Iterate through each reply to fetch user details
        for(const reply in replies){

            const userProfile = await db.UserProfile.find({ user: reply.user });

            if (!userProfile) {
                console.warn(`User profile not found for post ID ${post._id}`);
                continue;
            }

            // Extract relevant information and add to repliesInfo array
            repliesInfo.push({
                pic: userProfile.image,
                username: userProfile.username,
                reply
            });

        }

        res.send(repliesInfo)
        
    } catch (error) {
        console.error("Error getting Replies:", error.message);
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

// Delete reply
router.delete('/:replyId', async (req, res) =>{
    try{

        let reply = db.PostComment.findById(req.params.replyId);
        if (!reply) {
            return res.status(404).json({ message: 'Reply not found' });
        };

        if(req.user.userID !== reply.user){
            return res.status(403).json({ message: 'Unauthorized to delete this reply' });
        };

        // Delete the post
        await db.PostComment.findByIdAndDelete( req.params.replyId );

        res.status(200).json({ message: 'Reply deleted successfully' });

    }catch (error) {
        console.error("Error deleting Reply:", error.message);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Update Post
router.put('/:postId', async (req, res) => {

    try{

        // Construct the update object based on provided data
        const updateData = {};
        if (req.body.post) updateData.post = req.body.post;
        if (req.body.image) updateData.image = req.body.image;

        // Ensure that either post or image or both are provided
        if (!req.body.post && !req.body.image) {
            return res.status(400).json({ message: 'No post or image provided for update' });
        }

        // Update the community post
        const updatedPost = await db.CommunityPost.findByIdAndUpdate(
            req.params.postId,
            updateData,
            { new: true } // Return the updated document
        );

        // Check if the post was found and updated
        if (!updatedPost) {
            return res.status(404).json({ message: 'Post not found' });
        };

        res.json(updatedPost);

    }catch (error) {
        console.error("Error updating Post:", error.message);
        res.status(400).json({ message: error.message });
    }

});

// Update Reply
router.put('/:replyId', async (req, res) => {

    try{

        // Construct the update object based on provided data
        const updateData = {};
        if (req.body.reply) updateData.reply = req.body.reply;
        if (req.body.image) updateData.image = req.body.image;

        // Ensure that either reply or image or both are provided
        if (!req.body.reply && !req.body.image) {
            return res.status(400).json({ message: 'No reply or image provided for update' });
        }

        // Update the post comment
        const updatedReply = await db.PostComment.findByIdAndUpdate(
            req.params.replyId,
            updateData,
            { new: true } // Return the updated document
        );

        // Check if the reply was found and updated
        if (!updatedReply) {
            return res.status(404).json({ message: 'Reply not found' });
        };

        res.json(updatedReply);

    }catch (error) {
        console.error("Error updating reply:", error.message);
        res.status(400).json({ message: error.message });
    }

});

async function createPost(userId, postData) {

    const newPost = {
        post: postData.post,
        image: postData.image,
        likes: 0,
        user: userId,
    };

    const createdPost = await db.CommunityPost.create(newPost);
    await createdPost.save();
};

// Create Post
router.post('/create', verifyToken, async (req, res) =>{

    try {

        const user = await db.User.findById(req.user.userID);

        if (!user) {
        return res.status(404).json({ message: "User not found" });
        }

        await createPost(req.user.userID, req.body);

        return res.status(201).json({ message: 'Post created successfully'});
        
    } catch (error) {
        console.error("Error creating post:", error.message);
        res.status(400).json({ message: error.message });
    }

});

async function createReply(userId, postId, replyData) {

    const newReply = {
        reply: replyData.reply,
        image: replyData.image,
        likes: 0,
        post: postId,
        user: userId,
    };

    const createdReply = await db.PostComment.create(newReply);
    await createdReply.save();
};

// Create Reply
router.post('/create/:postId', verifyToken, async (req, res) =>{

    try {

        const user = await db.User.findById(req.user.userID);

        if (!user) {
        return res.status(404).json({ message: "User not found" });
        }

        await createReply(req.user.userID, req.params.postId, req.body);

        return res.status(201).json({ message: 'Reply created successfully'});
        
    } catch (error) {
        console.error("Error creating reply:", error.message);
        res.status(400).json({ message: error.message });
    }

});

// Edit Post
router.get('/edit/:postId', async(req, res) => {

    try {

        const post = await db.CommunityPost.findById(req.params.postId);

        if (!post) {
        return res.status(404).json({ message: "Post not found" });
        }

        if(req.user.userID !== post.user){
            return res.status(403).json({ message: 'Unauthorized to edit this post' });
        };

        res.json(post);
        
    } catch (error) {
        console.error("Error fetching post:", error.message);
        res.status(400).json({ message: error.message });
    }

});

// Edit Reply
router.get('/edit/:replyId', async(req, res) => {

    try {

        const reply = await db.PostComment.findById(req.params.replyId);

        if (!reply) {
        return res.status(404).json({ message: "Post not found" });
        }

        if(req.user.userID !== reply.user){
            return res.status(403).json({ message: 'Unauthorized to edit this post' });
        };

        res.json(reply);
        
    } catch (error) {
        console.error("Error fetching reply:", error.message);
        res.status(400).json({ message: error.message });
    }

});

module.exports = router