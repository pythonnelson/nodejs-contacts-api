const asyncHandler = require('express-async-handler');
const bcrypt = require("bcrypt");
const User = require("../models/userModel");

// Register new user
// Route: POST /api/v1/users/register
// Access: Public (for now)
const registerUser = asyncHandler(async (req,res) => {
    const { full_name, username, email, password } = req.body;

    if (!full_name || !username || !email || !password) {
        res.status(400)
        throw new Error('All fields are requied');
    }

    const usernameExists = await User.findOne({username});
    const emailExists = await User.findOne({email});

    if (usernameExists) {
        res.status(400)
        throw new Error('Username already exists');
    }

    if (emailExists) {
        res.status(400)
        throw new Error('Email already exists');
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
        full_name,
        username,
        email,
        password:hashedPassword
    });
    console.log(`User successfully created: ${user}`);

    if(user) {
        res.status(201).json({ _id: user.id, username: user.username, email: user.email });
    } else {
        res.status(400);
        throw new Error("Invalid user data provided");
    }
    res.json({ message: "User Registration"});
});


// Login user
// Route: POST /api/v1/users/login
// Access: Public (for now)
const loginUser = asyncHandler(async (req,res) => {
    res.json({ message: "User Login"});
});


// Logged in user info
// Route: GET /api/v1/users/userInfo
// Access: Private (for now)
const userInfo = asyncHandler(async (req,res) => {
    res.json({ message: "User Information"});
});

module.exports = { registerUser, loginUser, userInfo };