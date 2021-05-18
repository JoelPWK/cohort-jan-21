const mongoose = require(`mongoose`);

const ingredientSchema = mongoose.Schema({
    name: String,
    calories: Number,
    fat: Number,
    saturatedFat: Number,
    carbs: Number,
    fibre: Number,
    salt: Number,
});

module.exports.Ingredient = mongoose.model(`Ingredient`, ingredientSchema);
