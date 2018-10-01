import dotenv from "dotenv";
import express from "express";
dotenv.config({ path: ".env" });

import * as systemController from "./controllers/system";

const app = express();

app.use(express.json());

app.set("port", process.env.PORT || process.env.DEFAULT_PORT);
app.get("/", systemController.getDefault);
app.get("/health", systemController.getHealth);
app.post("/echo", systemController.postEcho);

export default app;
