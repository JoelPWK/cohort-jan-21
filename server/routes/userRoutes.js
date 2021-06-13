const express = require("express");
const router = express.Router();
const { User } = require("../models/User");
const jsonwebtoken = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require("dotenv").config({ path: "./config/.env" });

//get a list of existing users
router.route("/").get(async (req, res) => {
    User.find()
        .then((users) => res.json(users))
        .catch((err) => res.status(400).json(`Error: ${err}`));
});

// Get request for existing users by id
router.route(`/:id`).get(async (req, res) => {
    const findUser = await User.findById(req.params.id);
    try {
        res.json(findUser);
    } catch (err) {
        res.status(400).json(`This user does not exist`);
    }
});

//adding a new user
router.route(`/add-user`).post(async (req, res) => {
    const { email, password } = req.body;

    const newUser = new User({
        email: email,
        password: password,
    });

    // Encrypt password
    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(password, salt);

    //JWT
    const token = jsonwebtoken.sign(
        {
            id: newUser._id,
        },
        process.env.JWT_SECRET
    );

    //setting as a cookie - only accessible as http - stops javascript from reading the token
    res.cookie(`token`, token, { httpOnly: true });

    //saving in database
    newUser
        .save()
        .then(() => res.json(`User added`))
        .catch((err) => res.status(400).json(`Error: ${err}`));
});

// POST request to log user in and retrieve user id
router.route(`/login`).post(async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({
            email: email,
        });
        if (!user) {
            return res.status(400).json(`Invalid credentials`);
        }

        // Hash password with bcrypt and compare with what is in the database for that user
        const matchPassword = await bcrypt.compare(password, user.password);
        if (!matchPassword) {
            return res.status(400).json(`Invalid credentials`);
        }

        res.json(user._id);
    } catch (err) {
        res.status(500).json(`Server error`);
    }
});

module.exports = router;
