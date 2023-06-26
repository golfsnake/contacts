// ------------------------------------------------------------------------------------------------------------------------------------------------
// Project: Contact Manager
// Description: User model
// Author: Gonzalo Salas
// Date: 2023-06-26
// ------------------------------------------------------------------------------------------------------------------------------------------------

// Libraries
const mongoose = require('mongoose');

// Schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please provide a name"],
    },
    email: {
        type: String,
        required: [true, "Please provide an email"],
        unique: [true, "Email already exists"],
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
    },
}, {
    timestamps: true,
});

// Export the model
module.exports = mongoose.model("User", userSchema);