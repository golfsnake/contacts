// ------------------------------------------------------------------------------------------------------------------------------------------------
// Project: Contact Manager
// Description: User controllers
// Author: Gonzalo Salas
// Date: 2023-06-26
// ------------------------------------------------------------------------------------------------------------------------------------------------

// Librairies
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");

// Models
const User = require("../models/userModel");

// @desc: Register a user
// @route: GET /api/users/register
// @access: Public
const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;

    if(!username || !email || !password ) {
        res.status(400);
        throw new Error("Please fill all fields");
    }

    const userAlreadyExist = await User.findOne({email});
    if(userAlreadyExist) {
        res.status(400);
        throw new Error("User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({username, email, password: hashedPassword});

    if(user) {
        res.status(201).json({ _id: user._id, username: user.username, email: user.email });
    } else {
        res.status(400);
        throw new Error("Invalid user data");
    }
});

// @desc: Login user
// @route: GET /api/users/login
// @access: Public
const loginUser = asyncHandler(async (req, res) => {
    res.json({ message: "Register the user." });
});

// @desc: Current user information
// @route: GET /api/users/current
// @access: Private
const currentUser = asyncHandler(async (req, res) => {
    res.json({ message: "Register the user." });
});

// Export
module.exports = { registerUser, loginUser, currentUser };