import express from "express";
import http from "http";
import cors from "cors";

import config from "./configs"
import database from "./database"


const app = express();

app.use(cors({
    credentials: true,
}));

app.use(express.json());

const server = http.createServer(app);

server.listen(config.port, async () => {
    console.log(`Server running on port ${config.port}`);
    try {
        await database.connect();
    } catch (error) {
        process.exit(1);
    }
});


// SIGTERM signal is sent to a process of Node.js to request its termination
process.on("SIGTERM", async () => {
    await database.closeConnection();
    server.close();
    process.exit(0);
});

// SIGINT is the signal sent when Ctrl+C is pressed
process.once("SIGINT", async () => {
    await database.closeConnection();
    server.close();
    process.exit(0);
});
