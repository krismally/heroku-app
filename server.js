require("dotenv").config();

// dependencies
const express = require("express");
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const app = express();
const db = mongoose.connection;

// port
// allow use of heroku's port or own local port, depending on environment
const PORT = process.env.PORT || 3000;

// database
// connect to database via heroku or locally
const MONGODB_URI = process.env.MONGODB_URI

// connect to mongo(required) + fix depreciation warnings(optional to fix)
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// error/success
db.on('error', (err) => console.log(err.message + ' is mongod not running?'));
db.on('connected', () => console.log('mongod connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongod disconnected'));

// middleware

// use public folder for static assets
app.use(express.static("public"));

// allows access to req.boy's content
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// use method override 
app.use(methodOverride("_method")); // allow POST, PUT, + DELETE from a form

// routes
// I
app.get("/", (req, res) => {
    res.send("Hello World!")
})

// N

// D

// U

// C

// E

// S

// listener
app.listen(PORT, () => {
    console.log("express is listening on port:", PORT)
})