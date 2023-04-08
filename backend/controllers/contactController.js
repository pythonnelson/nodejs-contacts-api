const asyncHandler = require('express-async-handler');

// Get all contacts
// Route: GET /api/v1/contacts
// Access: Public (for now)
const getContacts = asyncHandler(async (req,res) => {
    res.status(200).json({ message: "All Contacts" });
});

// Create contact
// Route: GET /api/v1/contacts
// Access: Public (for now)
const viewContact = asyncHandler(async (req,res) => {
    res.status(200).json({ message: "View Contact" });
});

// Create contact
// Route: POST /api/v1/contacts
// Access: Public (for now)
const createContact = asyncHandler(async (req,res) => {
    console.log(req.body);

    const { last_name, middle_name, first_name, email, phone, address } = req.body;

    if (!last_name || !first_name || !email || !phone || !address) {
        res.status(400);
        throw new Error("Provide details for required fields");
    }
    res.status(201).json({ message: "Create Contact" });
});

// Create contact
// Route: PUT /api/v1/contacts
// Access: Public (for now)
const updateContact = asyncHandler(async (req,res) => {
    res.status(200).json({ message: "Update Contact" });
});

// Create contact
// Route: DELETE /api/v1/contacts
// Access: Public (for now)
const deleteContact = asyncHandler(async (req,res) => {
    res.status(200).json({ message: "Delete Contact" });
});



module.exports = { getContacts, createContact, viewContact, updateContact, deleteContact };