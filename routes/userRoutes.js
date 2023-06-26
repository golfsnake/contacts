// ------------------------------------------------------------------------------------------------------------------------------------------------
// Project: Contact Manager
// Description: User routes
// Author: Gonzalo Salas
// Date: 2023-06-26
// ------------------------------------------------------------------------------------------------------------------------------------------------

// Librairies
const express = require("express");
const router = express.Router();

// Controllers
const { registerUser, loginUser, currentUser } = require("../controllers/userControllers");

// Routes
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/current", currentUser);

// Export
module.exports = router;