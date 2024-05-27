require('dotenv').config()
const router = require('express').Router()
const User  = require('../models/user')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

// login route
router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body

        const user = await User.findOne({ username })
        if(!user) throw new Error(`Could not find this user in the database: User with username ${username}`)  

        const auth = await bcrypt.compare(password, user.password)
        if (!auth) throw new Error(`The password credentials shared did not match the credentials for the user with username ${username}`)

        const token = createToken(user._id)
        res.json({ token, user })

        res.cookie("token", token, {
            withCredentials: true,
            httpOnly: false,
          });

        res.status(201).json({ message: "User logged in successfully", success: true });

        next()

    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
})

// createToken
function createToken(userID){
    return jwt.sign({ userID }, process.env.SECRET, { expiresIn: 3 * 24 * 60 * 60,})
 }

module.exports = router