const express = require("express");
const router = express.Router();
const { getContact, createContact, viewContact,updateContact, deleteContact } = require("../controllers/contactController");


// Get all contacts
router.route("/").get(getContact);

// Create contact
router.route("/").post(createContact);

// Get Single contact
router.route("/:id").get(viewContact);

// Update contact
router.route("/:id").put(updateContact);

// Delete contact
router.route("/:id").delete(deleteContact);

module.exports = router;