const mongoose = require("mongoose");
const { default: isEmail } = require("validator/lib/isEmail");

const schemaUser = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        validate: [isEmail, 'Invalid email']
    },
    password: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
});

const User = mongoose.model("Users", schemaUser);

module.exports = { schemaUser, User };