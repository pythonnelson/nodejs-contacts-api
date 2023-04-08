const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
    last_name: {
        type: String,
        required: [true, "Last name field is required"],
    },
    first_name: {
        type: String,
        required: [true, "First name field is required"],
    },
    others: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: [true, "Email field is required"],
    },
    phone: {
        type: String,
        required: [true, "Phone field is required"],
    },
    address: {
        type: String,
        required: [true, "Address field is required"],
    },
    country: {
        type: String,
        required: [true, "Country field is required"],
    },
    state: {
        type: String,
        required: [true, "State field is required"],
    },
    isActive: {
        type: Boolean,
        default: true,
    },
}, {
    timestamps: true
});

module.exports = mongoose.model("Contacts", contactSchema);