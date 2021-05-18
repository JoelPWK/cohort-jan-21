import User from "./user";
import Ingredient from "./ingredients";

const mongoose = require(`mongoose`);

const recipeSchema = mongoose.Schema({
    name: String,
    description: String,
    ingredients: Ingredient,
    author: User,
    likes: Number,
    estimatedTime: Number,
});

module.exports.Recipe = mongoose.model(`Recipe`, recipeSchema);
