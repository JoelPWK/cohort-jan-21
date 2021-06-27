const express = require("express");
const router = express.Router();
const { Recipe } = require("../models/Recipe");
const { check, validationResult } = require("express-validator");
require("dotenv").config({ path: "./config/.env" });

//get a list of existing recipes
router.route("/").get(async (req, res) => {
    Recipe.find()
        .then((recipes) => res.json(recipes))
        .catch((err) => res.status(400).json(`Error: ${err}`));
});

//get recipe by id
router.route("/:id", (req,res) => {
    Recipe.findById
})

//adding a new recipe
router.route("/add-recipe").post((req, res) => {
    const { ingredients, name, instructions, tools, estimatedTime,gravatar,author  } = req.body;

    const newRecipe = new Recipe({
        ingredients:ingredients,
        name: name,
        author:author,
        gravatar:gravatar,
        instructions: instructions,
        tools:tools,
        // likes:likes,
        estimatedTime:estimatedTime,
    });

    //saving in database
    newRecipe
        .save()
        .then(() => res.json("recipe added"))
        .catch((err) => res.status(400).json("Error: " + err));
});



module.exports = router;