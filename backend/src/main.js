// main.js
// The entry point of the Express.js application for setting up the main server and routing.

import express from "express";
import "dotenv/config";
import aiController from "./controllers/ai.controller.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// Connect all routes from the AI controller to the prefix /
app.use("/", aiController);

// Run the server on the specified port (default: 3000)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
