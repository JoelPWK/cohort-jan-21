const express = require("express");
const router = express.Router();
const { User } = require("../models/User");
const jsonwebtoken = require("jsonwebtoken");
require("dotenv").config({ path: "./config/.env" });

//get a list of existing users
router.route("/").get(async (req, res) => {
    User.find()
        .then((users) => res.json(users))
        .catch((err) => res.status(400).json("Error: " + err));
});

// Get request for existing users by id
router.route("/:id").get(async (req, res) => {
    const findUser = await User.findById(req.params.id);
    try {
        res.json(findUser);
    } catch (err) {
        res.status(400).json("this user does not exist");
    }
});

//adding a new user
router.route("/add-user").post((req, res) => {
    const { email, password } = req.body;

    const newUser = new User({
        email: email,
        password: password,
    });

    //JWT
    const token = jsonwebtoken.sign(
        {
            id: newUser._id,
        },
        process.env.JWT_SECRET
    );

    //setting as a cookie - only accessible as http - stops javascript from reading the token
    res.cookie("token", token, { httpOnly: true });

    //saving in database
    newUser
        .save()
        .then(() => res.json("user added"))
        .catch((err) => res.status(400).json("Error: " + err));
});

// POST request to log user in and retrieve user id
router.route("/login").post(async (req, res) => {
    const { email, password } = req.body;
    const findUser = await User.findOne({
        email: email,
        password: password,
    });
    try {
        res.json(findUser._id);
    } catch (err) {
        res.status(400).json("this user does not exist");
    }
});

module.exports = router;
