// ------------------------------------------------------------------------------------------------------------------------------------------------
// Project: Contact Manager
// Description: Contact controllers
// Author: Gonzalo Salas
// Date: 2023-06-25
// ------------------------------------------------------------------------------------------------------------------------------------------------

// Librairies
const asyncHandler = require("express-async-handler");

// Models
const Contact = require("../models/contactModel");

// @desc: Get all contacts
// @route: GET /api/contacts
// @access: private
const getContacts = asyncHandler(async (req, res) => {
    // Get all contacts
    const contacts = await Contact.find({user_id: req.user.id});

    // Send response
    res.status(200).json(contacts);
});

// @desc: Create a contact
// @route: POST /api/contacts
// @access: private
const createContact = asyncHandler(async (req, res) => {
    // Check if all fields are filled
    const {name, email, phone} = req.body;
    if(!name || !email || !phone ) {
        res.status(400);
        throw new Error("Please fill all fields");
    }

    // Create contact
    const contact = await Contact.create({user_id: req.user.id, name, email, phone});

    // Send response
    res.status(201).json(contact);
});

// @desc: Get a contact by id
// @route: GET /api/contacts/:id
// @access: private
const getContact = asyncHandler(async (req, res) => {
    // Get contact
    const contact = await Contact.findById(req.params.id);
    console.log(contact);
    console.log(req.user.id);

    // Check if contact exists and belongs to user
    if(!contact || contact.user_id != req.user.id) {
        res.status(404);
        throw new Error("Contact not found");
    }

    // Send response
    res.status(200).json(contact);
});

// @desc: Update a contact
// @route: UPDATE /api/contacts/:id
// @access: private
const updateContact = asyncHandler(async (req, res) => {
    // Find contact
    const contact = await Contact.findById(req.params.id);

    // Check if contact exists and belongs to user
    if(!contact || contact.user_id != req.user.id) {
        res.status(404);
        throw new Error("Contact not found");
    }

    // Update contact
    const updatedContact = await Contact.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true });

    // Send response
    res.status(200).json(updatedContact);
});

// @desc: Delete a contact
// @route: DELETE /api/contacts/:id
// @access: private
const deleteContact = asyncHandler(async (req, res) => {
    // Find contact
    const contact = await Contact.findById(req.params.id);

    // Check if contact exists and belongs to user
    if(!contact || contact.user_id != req.user.id) {
        res.status(404);
        throw new Error("Contact not found");
    }

    // Delete contact
    await Contact.deleteOne({_id: req.params.id});

    // Send response
    res.status(200).json(contact);
});

// Export
module.exports = {getContacts, createContact, getContact, updateContact, deleteContact};