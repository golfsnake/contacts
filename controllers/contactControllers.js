// ------------------------------------------------------------------------------------------------------------------------------------------------
// Project: Contact Manager
// Description: Contact controllers
// Author: Gonzalo Salas
// Date: 2023-06-25
// ------------------------------------------------------------------------------------------------------------------------------------------------

// @desc: Get all contacts
// @route: GET /api/contacts
// @access: Public
const getContacts = async (req, res) => {
    res.status(200).json({message: "Get all contacts"});
};

// @desc: Create a contact
// @route: POST /api/contacts
// @access: Public
const createContact = async (req, res) => {
    console.log("The request body is :", req.body);
    res.status(201).json({message: `Create a contact`});
};

// @desc: Get a contact by id
// @route: GET /api/contacts/:id
// @access: Public
const getContact = async (req, res) => {
    res.status(200).json({message: `Get a contact with id ${req.params.id}`});
};

// @desc: Update a contact
// @route: UPDATE /api/contacts/:id
// @access: Public
const updateContact = async (req, res) => {
    res.status(200).json({message: `Update a contact with id ${req.params.id}`});
};

// @desc: Delete a contact
// @route: DELETE /api/contacts/:id
// @access: Public
const deleteContact = async (req, res) => {
    res.status(200).json({message: `Delete a contact with id ${req.params.id}`});
};

// Export
module.exports = {getContacts, createContact, getContact, updateContact, deleteContact};