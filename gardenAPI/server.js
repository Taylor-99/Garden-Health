
// Dependencies
const express = require('express');
const livereload = require("livereload");
const connectLiveReload = require("connect-livereload");
const morgan = require('morgan')
const cors = require("cors");
require("dotenv").config();
const cookieParser = require("cookie-parser");

// Require the db connection and models
const db = require('./models');

userCtrl = require('./contollers/userController')

const PORT = process.env.PORT||3000

const app = express();

const liveReloadServer = livereload.createServer();

liveReloadServer.server.once("connection", () => {
    // wait for nodemon to fully restart before refreshing the page
    setTimeout(() => {
        liveReloadServer.refresh("/");
    }, 100);
});

// Indicates where our static files are located
app.use(cors())
app.use(express.static('public'))
// Use the connect-livereload package to connect nodemon and livereload
app.use(connectLiveReload());
// Body parser: used for POST/PUT/PATCH routes: 
// this will take incoming strings from the body that are URL encoded and parse them 
// into an object that can be accessed in the request parameter as a property called body (req.body).
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(morgan('tiny')) // morgan is just a logger

app.use(cookieParser());

app.use('/users', userCtrl)

// App Listen
app.listen(PORT, ()=> {
    console.log(`Listening to port ${PORT}`);
  });  