// ------------------------------------------------------------------------------------------------------------------------------------------------
// Project: Contact Manager
// Description: Database connection
// Author: Gonzalo Salas
// Date: 2023-06-25
// ------------------------------------------------------------------------------------------------------------------------------------------------

// Libraries
const mongoose = require('mongoose');

// Connection
const connectDb = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB connected: ', connect.connection.host, connect.connection.name);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

// Export the connection
module.exports = connectDb;
