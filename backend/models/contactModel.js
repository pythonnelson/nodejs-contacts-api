const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
    last_name: {
        type: String,
        required: [true, "Last name is required"],
    },
    first_name: {
        type: String,
        required: [true, "First name is required"],
    },
    others: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: [true, "Email is required"],
    },
    phone: {
        type: String,
        required: [true, "Phone is required"],
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("Contacts", contactSchema);