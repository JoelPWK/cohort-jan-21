const mongoose = require(`mongoose`);

const ingredientSchema = mongoose.Schema({
    name: { String, required: true },
    calories: { Number, required: true },
    fat: { Number, required: true },
    saturatedFat: { Number, required: true },
    carbs: { Number, required: true },
    fibre: { Number, required: true },
    salt: { Number, required: true },
});

module.exports.Ingredient = mongoose.model(`Ingredient`, ingredientSchema);
