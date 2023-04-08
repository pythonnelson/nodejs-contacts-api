const express = require("express");
const router = express.Router();
const { getContacts, createContact, viewContact,updateContact, deleteContact } = require("../controllers/contactController");


router.route("/").get(getContacts).post(createContact);
router.route("/:id").get(viewContact).put(updateContact).delete(deleteContact);

module.exports = router;