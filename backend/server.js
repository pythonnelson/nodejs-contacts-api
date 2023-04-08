const express = require("express");
const errorhandler = require("./middleware/errorhandler");
const dotenv = require("dotenv").config();
const connectDb = require("./config/dbConnection");

// Call the DB connection
connectDb();

const app = express();
const port = process.env.PORT || 9500;

app.use(express.json());
app.use("/api/v1/contacts", require("./routes/contactRoutes"));
app.use("/api/v1/users", require("./routes/userRoutes"));
app.use(errorhandler);

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
})