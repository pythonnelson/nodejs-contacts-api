// Get all contacts
// Route: GET /api/v1/contacts
// Access: Public (for now)
const getContacts = (req,res) => {
    res.status(200).json({ message: "All Contacts" });
};

// Create contact
// Route: GET /api/v1/contacts
// Access: Public (for now)
const viewContact = (req,res) => {
    res.status(200).json({ message: "View Contact" });
};

// Create contact
// Route: POST /api/v1/contacts
// Access: Public (for now)
const createContact = (req,res) => {
    res.status(201).json({ message: "Create Contact" });
};

// Create contact
// Route: PUT /api/v1/contacts
// Access: Public (for now)
const updateContact = (req,res) => {
    res.status(200).json({ message: "Update Contact" });
};

// Create contact
// Route: DELETE /api/v1/contacts
// Access: Public (for now)
const deleteContact = (req,res) => {
    res.status(200).json({ message: "Delete Contact" });
};



module.exports = { getContacts, createContact, viewContact, updateContact, deleteContact };