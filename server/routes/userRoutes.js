const express = require("express");
const router = express.Router();
const { User } = require("../models/User");
const jsonwebtoken = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require("dotenv").config({ path: "./config/.env" });
const { check, validationResult } = require("express-validator");
const gravatar = require("gravatar");

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

//Register a new user
router
    .route(`/add-user`)
    .post(
        [
            check("email", "Please include a valid email").isEmail(),
            check(
                "password",
                "Please enter a password with 6 or more characters"
            ).isLength({ min: 6 }),
        ],
        async (req, res) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            const { email, password } = req.body;

            try {
                //Check if user exists
                let user = await User.findOne({ email });
                if (user) {
                    return res
                        .status(400)
                        .json({ errors: [{ msg: "User already exists" }] });
                }
                // Get gravatar
                const avatar = gravatar.url(
                    email,
                    {
                        s: "200",
                        r: "pg",
                        d: "retro",
                    },
                    true
                );

                user = new User({
                    email,
                    password,
                    avatar,
                });

                // Encrypt password
                const salt = await bcrypt.genSalt(10);
                user.password = await bcrypt.hash(password, salt);

                //JWT
                const token = jsonwebtoken.sign(
                    {
                        id: user._id,
                    },
                    process.env.JWT_SECRET
                );
                //setting as a cookie - only accessible as http - stops javascript from reading the token
                res.cookie(`token`, token, { httpOnly: true });

                // Save User to the database
                await user.save();
                res.json({ msg: "User registered" });
            } catch (err) {
                console.error(err.message);
                res.status(500).send("Server error");
            }
        }
    );

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

        res.json({
            userId: user._id,
            userAvatar: user.avatar,
            userEmail: user.email,
        });
    } catch (err) {
        res.status(500).json(`Server error`);
    }
});

// edit existing user
router.route(`/:id`).put(async (req, res) => {
    const findUser = await User.findById(req.params.id);

    if (!findUser) {
        return res.status(400).json(`This user does not exist.`);
    }

    try {
        if (req.body.password) {
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);
        }
        await User.findByIdAndUpdate(findUser, req.body);
        res.json(`User updated`);
    } catch (err) {
        res.status(500).json(`Server error: ${err}`);
    }
});

// delete existing user
router.route(`/:id`).delete(async (req, res) => {
    const findUser = await User.findById(req.params.id);
    if (!findUser) {
        return res.status(400).json(`This user does not exist.`);
    }
    try {
        await User.deleteOne(findUser);
        res.json(`User deleted`);
    } catch (err) {
        res.status(500).json(`Server error: ${err}`);
    }
});

module.exports = router;
