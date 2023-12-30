import express from "express";
import http from "http";
import cors from "cors";


const app = express()

app.use(cors({
    credentials: true,
}));

app.use(express.json());

const server = http.createServer(app);

server.listen(8000, () => {
    console.log('Server running on http://localhost:8000');
});
