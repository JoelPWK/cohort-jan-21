const mongoose = require(`mongoose`);

const ingredientSchema = mongoose.Schema({
    name: { type: String, required: true },
    calories: { type: Number, required: true },
    fat: { type: Number, required: true },
    saturatedFat: { type: Number, required: true },
    carbs: { type: Number, required: true },
    fibre: { type: Number, required: true },
    salt: { type: Number, required: true },
});

module.exports.Ingredient = mongoose.model(`Ingredient`, ingredientSchema);
