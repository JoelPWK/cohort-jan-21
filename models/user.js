const mongoose = require(`mongoose`);
const ObjectId = mongoose.Schema.Types.ObjectId;

const userSchema = mongoose.Schema({
    email: { String, required: true, unique: true },
    password: { String, required: true },
    token: String,
    recipes: ObjectId,
    ingredients: ObjectId,
});

module.exports.User = mongoose.model(`User`, userSchema);
