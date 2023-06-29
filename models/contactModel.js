// ------------------------------------------------------------------------------------------------------------------------------------------------
// Project: Contact Manager
// Description: Contact model
// Author: Gonzalo Salas
// Date: 2023-06-25
// ------------------------------------------------------------------------------------------------------------------------------------------------

// Libraries
const mongoose = require('mongoose');

// Schema
const contactSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    name: {
        type: String,
        required: [true, "Please provide a name"],
    },
    email: {
        type: String,
        required: [true, "Please provide an email"],
    },
    phone: {
        type: String,
        required: [true, "Please provide a phone number"],
    },
}, {
    timestamps: true,
});

// Export the model
module.exports = mongoose.model("Contact", contactSchema);

