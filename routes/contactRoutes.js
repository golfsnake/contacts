// ------------------------------------------------------------------------------------------------------------------------------------------------
// Project: Contact Manager
// Description: Contact routes
// Author: Gonzalo Salas
// Date: 2023-06-25
// ------------------------------------------------------------------------------------------------------------------------------------------------

// Librairies
const express = require("express");
const router = express.Router();

// Controllers
const {getContacts, createContact, getContact, updateContact, deleteContact} = require("../controllers/contactControllers");
const validateToken = require("../middleware/validateTokenHandler");

// Middleware
router.use(validateToken);

// Routes
router.route("/").get(getContacts).post(createContact);
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

// Export
module.exports = router;