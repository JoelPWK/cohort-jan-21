import Recipe from "./recipes";
import Ingredient from "./ingredients";

const mongoose = require(`mongoose`);

const userSchema = mongoose.Schema({
    email: String,
    password: String,
    token: String,
    recipes: Recipe,
    ingredients: Ingredient,
});

module.exports.User = mongoose.model(`User`, userSchema);
