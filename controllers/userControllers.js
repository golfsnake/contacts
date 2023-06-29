// ------------------------------------------------------------------------------------------------------------------------------------------------
// Project: Contact Manager
// Description: User controllers
// Author: Gonzalo Salas
// Date: 2023-06-26
// ------------------------------------------------------------------------------------------------------------------------------------------------

// Librairies
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Models
const User = require("../models/userModel");

// @desc: Register a user
// @route: GET /api/users/register
// @access: Public
const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;

    // Check if all fields are filled
    if(!username || !email || !password ) {
        res.status(400);
        throw new Error("Please fill all fields");
    }

    // Check if user already exists
    const userAlreadyExist = await User.findOne({email});
    if(userAlreadyExist) {
        res.status(400);
        throw new Error("User already exists");
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await User.create({username, email, password: hashedPassword});

    // If user is created
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
    // Check if all fields are filled
    const { email, password } = req.body;
    if(!email || !password ) {
        res.status(400);
        throw new Error("Please fill all fields.");
    }

    // Check if user exists & password is correct
    const user = await User.findOne({email});
    if(!user || !bcrypt.compare(password, user.password)) {
        res.status(401);
        throw new Error("User or password is incorrect.");
    }
    
    // Create access token
    const accessToken = jwt.sign(
        {
            user: {
                id: user._id,
                username: user.username,
                email: user.email,
            },
        }, 
        process.env.JWT_SECRET, 
        {expiresIn: "15m"});

    res.status(200).json({accessToken});
});

// @desc: Current user information
// @route: GET /api/users/current
// @access: Private
const currentUser = asyncHandler(async (req, res) => {
    res.json(req.user);
});

// Export
module.exports = { registerUser, loginUser, currentUser };