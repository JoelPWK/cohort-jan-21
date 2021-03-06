const express = require("express");
const router = express.Router();
const { Recipe } = require("../models/Recipe");
const { check, validationResult } = require("express-validator");
require("dotenv").config({ path: "./config/.env" });

//get a list of existing recipes
router.route(`/`).get(async (req, res) => {
    const findRecipe = await Recipe.find();
    try {
        res.json(findRecipe);
    } catch (err) {
        res.status(400).json(`The recipe list is empty`);
    }
});

//get recipe by id
router.route(`/:id`).get(async (req, res) => {
    const findRecipe = await Recipe.findById(req.params.id);
    try {
        res.json(findRecipe);
    } catch (err) {
        res.status(400).json(`This recipe does not exist`);
    }
});

//adding a new recipe
router
    .route(`/add-recipe`)
    .post(
        [
            check(`name`, `The name of the recipe is required`).exists(),
            check(
                `ingredients`,
                `The ingredients of the recipe are required`
            ).exists(),
            check(`tools`, `The tools for the recipe are required`).exists(),
            check(
                `estimatedTime`,
                `The estimated time (in minutes) of the recipe is required`
            ).exists(),
        ],
        async (req, res) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            try {
                req.body.ingredients = req.body.ingredients
                    .split(`,`)
                    .map((item) => item.trim());

                req.body.tools = req.body.tools
                    .split(`,`)
                    .map((item) => item.trim());

                const newRecipe = new Recipe(req.body);

                //saving in database
                await newRecipe.save();
                res.json(`Recipe added`);
            } catch (err) {
                res.status(500).json(`Server error: ${err}`);
            }
        }
    );

// edit existing recipe
router.route(`/:id`).put(async (req, res) => {
    const findRecipe = await Recipe.findById(req.params.id);

    if (!findRecipe) {
        return res.status(400).json(`This recipe does not exist.`);
    }

    try {
        if (req.body.ingredients) {
            req.body.ingredients = req.body.ingredients
                .split(`,`)
                .map((item) => item.trim());
        }

        if (req.body.tools) {
            req.body.tools = req.body.tools
                .split(`,`)
                .map((item) => item.trim());
        }

        await Recipe.findByIdAndUpdate(findRecipe, req.body);
        res.json(`Recipe updated`);
    } catch (err) {
        res.status(500).json(`Server error: ${err}`);
    }
});

// delete existing recipe
router.route(`/:id`).delete(async (req, res) => {
    const findRecipe = await Recipe.findById(req.params.id);
    if (!findRecipe) {
        return res.status(400).json(`This recipe does not exist.`);
    }

    try {
        await Recipe.deleteOne(findRecipe);
        res.json(`Recipe deleted`);
    } catch (err) {
        res.status(500).json(`Server error: ${err}`);
    }
});

module.exports = router;
