import mongoose from "mongoose";

import config from "../configs";


/**
 * Database class to handle MongoDB connection and disconnection using mongoose.
 */
class Database {
    /**
     * Connects to the MongoDB database using the connection string from the configuration.
     */
    async connect() {
        try {
            await mongoose.connect(config.mongo.connectionString);
            console.log('Connected to database');
        } catch (error) {
            console.error(`Error connecting to database: ${error}`);
            throw error;
        }
    }

    /**
     * Closes the connection to the MongoDB database.
     */
    async closeConnection() {
        await mongoose.connection.close();
        console.log('Disconnected from the database');
    }
}

// Export an instance of the Database class to be used as a singleton
export default new Database();
