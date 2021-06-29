const mongoose = require(`mongoose`);

const recipeSchema = mongoose.Schema(
    {
        author: { type: String },
        gravatar: { type: String },
        ingredients: [
            {
                type: String,
                required: true,
            },
        ],
        name: { type: String, required: true },
        instructions: { type: String, required: true },
        tools: [
            {
                type: String,
                required: true,
            },
        ],
        estimatedTime: { type: Number, required: true },
        image: { type: String },
    },
    { timestamps: true }
);

module.exports.Recipe = mongoose.model(`Recipe`, recipeSchema);
