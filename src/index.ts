import express from "express";
import http from "http";
import cors from "cors";

import config from "./configs"


const app = express();

app.use(cors({
    credentials: true,
}));

app.use(express.json());

const server = http.createServer(app);

server.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`);
});
