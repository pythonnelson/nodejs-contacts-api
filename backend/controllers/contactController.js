// Get all contacts
// Route: GET /api/v1/contacts
// Access: Public (for now)

const getContact = (req,res) => {
    res.status(200).json({ message: "All Contacts" });
};

// Create contact
// Route: POST /api/v1/contacts
// Access: Public (for now)

const viewContact = (req,res) => {
    res.status(200).json({ message: "View Contact" });
};

// Create contact
// Route: POST /api/v1/contacts
// Access: Public (for now)

const createContact = (req,res) => {
    res.status(200).json({ message: "Create Contact" });
};

// Create contact
// Route: POST /api/v1/contacts
// Access: Public (for now)

const updateContact = (req,res) => {
    res.status(200).json({ message: "Update Contact" });
};

// Create contact
// Route: POST /api/v1/contacts
// Access: Public (for now)

const deleteContact = (req,res) => {
    res.status(200).json({ message: "Delete Contact" });
};



module.exports = { getContact, createContact, viewContact, updateContact, deleteContact };