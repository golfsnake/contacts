// ------------------------------------------------------------------------------------------------------------------------------------------------
// Project: Contact Manager
// Description:  Validate token handler
// Author: Gonzalo Salas
// Date: 2023-06-25
// ------------------------------------------------------------------------------------------------------------------------------------------------
// Librairies
const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

// Validate token handler
const validateToken = asyncHandler(async (req, res, next) => {
    // Check if token is provided
    const authHeader = req.headers.authorization;
    if(!authHeader || !authHeader.startsWith("Bearer")) {
        res.status(401);
        throw new Error("No token provided");
    }

    // Get & verify token
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if(err) {
            res.status(401);
            throw new Error("Not authorized, token failed");
        }
        req.user = decoded.user;
        next();
    });
});

// Export
module.exports = validateToken;