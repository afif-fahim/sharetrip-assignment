import mongoose from "mongoose";

import config from "../configs";


class Database {
    async connect() {
        try {
            await mongoose.connect(config.mongo.connectionString);
            console.log('Connected to database');
        } catch (error) {
            console.error(`Error connecting to database: ${error}`);
            throw error;
        }
    }

    async closeConnection() {
        await mongoose.connection.close();
        console.log('Disconnected from the database');
    }
}

export default new Database();
