// ------------------------------------------------------------------------------------------------------------------------------------------------
// Project: Contact Manager
// Description: Server file
// Author: Gonzalo Salas
// Date: 2023-06-25
// ------------------------------------------------------------------------------------------------------------------------------------------------

// Librairies
const express = require("express");
const dotenv = require("dotenv").config();
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");

// Server
connectDb();
const app = express();

// Port
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Routes
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

// Error handler
app.use(errorHandler);

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});