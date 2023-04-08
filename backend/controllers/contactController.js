const asyncHandler = require('express-async-handler');
const Contact = require("../models/contactModel");

// Get all contacts
// Route: GET /api/v1/contacts
// Access: Public (for now)
const getContacts = asyncHandler(async (req,res) => {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
});

// Create contact
// Route: GET /api/v1/contacts
// Access: Public (for now)
const viewContact = asyncHandler(async (req,res) => {
    const contact = await Contact.findById(req.params.id);

    // If no matching id is found, throw an error, else return the contact
    if (!contact) {
        res.status(404);
        throw new Error('Contact not found');
    }
    res.status(200).json(contact);
});

// Create contact
// Route: POST /api/v1/contacts
// Access: Public (for now)
const createContact = asyncHandler(async (req,res) => {
    console.log(req.body);

    // Destructure contact object
    const { 
        last_name, 
        first_name, 
        others,
        email, 
        phone, 
        address,
        country,
        state 
    } = req.body;

    if (!last_name || !first_name || !email || !phone || !address || !country || !state) {
        res.status(400);
        throw new Error("Provide details for required fields");
    }

    // If all required fields are satisfied
    const contact = await Contact.create({
        last_name, 
        first_name, 
        others,
        email, 
        phone, 
        address,
        country,
        state 
    });
    res.status(201).json(contact);
});

// Create contact
// Route: PUT /api/v1/contacts
// Access: Public (for now)
const updateContact = asyncHandler(async (req,res) => {
    const contact = await Contact.findById(req.params.id);

    // If no matching id is found, throw an error, else return the contact
    if (!contact) {
        res.status(404);
        throw new Error('Contact not found');
    }

    // Get the updated contact
    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    );
    res.status(200).json(updatedContact);
});

// Create contact
// Route: DELETE /api/v1/contacts
// Access: Public (for now)
const deleteContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      res.status(404);
      throw new Error("Contact not found");
    }
    await Contact.deleteOne({ _id: req.params.id });
    res.status(200).json(contact);
  });



module.exports = { getContacts, createContact, viewContact, updateContact, deleteContact };