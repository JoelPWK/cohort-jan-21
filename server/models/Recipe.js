const mongoose = require(`mongoose`);
const ObjectId = mongoose.Schema.Types.ObjectId;

const recipeSchema = mongoose.Schema(
    {
        // author: { type: ObjectId, required: true, ref: `User` },
        ingredients: [{
            type: String,
            required: true
        }],
        name: { type: String, required: true },
        instructions: { type: String, required: true },
        tools: [{
            type: String,
            required: true
        }],
        // likes: [{ user: { type: ObjectId, ref: `User` } }],
        estimatedTime: { type: Number, required: true },
    },
    { timestamps: true }
);

module.exports.Recipe = mongoose.model(`Recipe`, recipeSchema);
