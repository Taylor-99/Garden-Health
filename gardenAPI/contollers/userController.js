require('dotenv').config();
const router = require('express').Router();
const db  = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// signup route
router.post('/signup', async (req, res, next) => {
    try {

        let newUser = req.body;

        const existingUser = await db.User.findOne({ username: newUser.username});
        if (existingUser) {
            return res.json({ message: "Username already exists" });
        }else{
            // hash the password
            newUser.password  = bcrypt.hashSync(newUser.password, bcrypt.genSaltSync(10));
        
            const createUser = new db.User(newUser);
            await createUser.save();

            // make a token
            const token = createToken(createUser._id)
            res.json({token, createUser})

            res.cookie("token", token, {
                // withCredentials: true,
                httpOnly: false,
            });

            res.status(201).json({ message: "User signed up successfully", success: true, createUser });

            next();
        }

    } catch (error) {
        console.error(error);
    }
});

// login route
router.post('/login', async (req, res, next) => {
    try {
        const userLogin = req.body;

        if(!userLogin.username || !userLogin.password ){
            return res.json({message:'All fields are required'})
        }else {
            const user = await db.User.findOne({username: userLogin.username});

            if(!user) {
                console.log(`Could not find this user in the database: User with username ${userLogin.username}`);
            }else {
                const auth = await bcrypt.compare(userLogin.password, user.password);

                if (!auth) {
                    console.log(`The password credentials shared did not match the credentials for the user with username ${user.username}`);
                }else {
                    // make a token
                    const token = createToken(user._id)
                    res.json({token, user})

                    res.cookie("token", token, {
                        withCredentials: true,
                        httpOnly: false,
                    });

                    res.status(201).json({ message: "User signed in successfully", success: true, user });

                    next();
                }
            }

        }

    } catch (error) {
        console.error(error);
    }
});

//Verification
router.post('/', async (req, res) => {
    const token = req.cookies.token
    console.log(token)

    if (!token) {
      return res.json({ status: false })
    }

    jwt.verify(token, process.env.SECRET, async (err, data) => {
      if (err) {
       return res.json({ status: false })
      } else {
        const user = await db.User.findById(data.userID)
        if (user) return res.json({ status: true, user: user.username })
        else return res.json({ status: false })
      }
    })
  })

// createToken
function createToken(userID){
    return jwt.sign(
        { userID }, 
        process.env.SECRET, 
        { expiresIn: 3 * 24 * 60 * 60,}
    );
 }

module.exports = router