const mongoose = require(`mongoose`);
const ObjectId = mongoose.Schema.Types.ObjectId;

const recipeSchema = mongoose.Schema({
    author: ObjectId,
    ingredients: { ObjectId, required: true },
    name: { String, required: true },
    instructions: { String, required: true },
    tools: { String, required: true },
    likes: Number,
    estimatedTime: Number,
});

module.exports.Recipe = mongoose.model(`Recipe`, recipeSchema);
