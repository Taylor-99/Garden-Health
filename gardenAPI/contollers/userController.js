require('dotenv').config()
const router = require('express').Router()
const db  = require('../models')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

// signup route

router.post('/signup', async (req, res) => {
    try {
        console.log({ username: req.body.username})
        const findExistingUser = await db.User.findOne({ username: req.body.username});
        if (findExistingUser) {
            return res.json({ message: "Username already exists" });
        }

        // hash the password
        req.body.password  = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
        console.log(req.body.password)
        
        const newUser = new db.User(req.body)
        await newUser.save()

        // make a token
        const token = createToken(newUser._id)
        res.json({token, newUser})

        res.cookie("token", token, {
            withCredentials: true,
            httpOnly: false,
        });

        res.status(201).json({ message: "User signed in successfully", success: true, user });

        next();

    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
})

// create profile



// login route
router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        if(!username || !password ){
            return res.json({message:'All fields are required'})
        }

        const user = await db.User.findOne({ username });
        if(!user) throw new Error(`Could not find this user in the database: User with username ${username}`);

        const auth = await bcrypt.compare(password, user.password);
        console.log(user.password)
        console.log(password)
        if (!auth) throw new Error(`The password credentials shared did not match the credentials for the user with username ${username}`);

        const token = createToken(user._id);
        res.json({ token, user });

        res.cookie("token", token, {
            withCredentials: true,
            httpOnly: false,
          });

        res.status(201).json({ message: "User logged in successfully", success: true });

        next();

    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
})

// createToken
function createToken(userID){
    return jwt.sign({ userID }, process.env.SECRET, { expiresIn: 3 * 24 * 60 * 60,});
 }

module.exports = router