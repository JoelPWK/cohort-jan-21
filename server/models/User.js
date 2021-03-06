const mongoose = require(`mongoose`);
const ObjectId = mongoose.Schema.Types.ObjectId;

const userSchema = mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    token: { type: String },
    avatar: { type: String },
    ingredients: [{ type: ObjectId, ref: `Ingredient` }],
});

module.exports.User = mongoose.model(`User`, userSchema);