const express = require("express");
const router = express.Router();
const { User } = require("../models/User");
const { check, validationResult } = require("express-validator");
const jsonwebtoken = require("jsonwebtoken")
require('dotenv').config({ path: '../.env' });


//get a list of existing users
router.route("/").get(async (req, res) => {
    User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

//adding a new user
router.route("/adduser").post((req, res) => {
    const { email, password } = req.body;
    
    const newUser = new User({
        email: email,
        password: password,
    });
    
    //JWT
    const token =jsonwebtoken.sign( 
        {
        id: newUser._id,
    },
     process.env.JWT_SECRET);

     //setting as a cookie
     res.cookie("token",token)    
    
    //saving in database
    newUser
    .save()
    .then(() => res.json("user added"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;

//Get request for existing users
// router.get("/users/:id", function (req,res) {
//     User.findById(req.params.id)
//     try {res
//         .json({User})

//     } catch (err) {
//         res
//         .status(400)
//         .json("error getting user list")
//     }
// });