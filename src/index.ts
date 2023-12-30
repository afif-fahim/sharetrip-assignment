import express from "express";
import http from "http";
import cors from "cors";

import config from "./configs"
import database from "./database"
import router from "./router";


const app = express();

// Enable CORS with credentials support
app.use(cors({
    credentials: true,
}));

// Parse incoming JSON requests
app.use(express.json());

// Create an HTTP server using the Express app
const server = http.createServer(app);

// Start the server and connect to the database
server.listen(config.port, async () => {
    console.log(`Server running on port ${config.port}`);
    try {
        await database.connect();
    } catch (error) {
        process.exit(1);
    }
});


// Handle SIGTERM signal (termination request) gracefully
process.on("SIGTERM", async () => {
    await database.closeConnection();
    server.close();
    process.exit(0);
});

// Handle SIGINT signal (Ctrl+C) gracefully
process.once("SIGINT", async () => {
    await database.closeConnection();
    server.close();
    process.exit(0);
});

// Use the router for handling routes starting from the root ("/")
app.use("/", router());
