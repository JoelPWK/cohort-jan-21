const express = require("express");
const router = express.Router();
const { Recipe } = require("../models/Recipe");
const { check, validationResult } = require("express-validator");
require("dotenv").config({ path: "./config/.env" });

//get a list of existing recipes
router.route("/recipes").get(async (req, res) => {
    User.find()
        .then((recipes) => res.json(recipes))
        .catch((err) => res.status(400).json("Error: " + err));
});

//adding a new recipe
router.route("/addRecipe").post((req, res) => {
    const { name, instructions } = req.body;

    const newRecipe = new Recipe({
        name: name,
        instructions: instructions,
    });


    //saving in database
    newRecipe
        .save()
        .then(() => res.json("recipe added"))
        .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;