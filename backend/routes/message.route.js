import express from "express";
import sendMessage, { getMessages } from "../controllers/message.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const messageRoute = express.Router();

messageRoute.get("/:Id", protectRoute, getMessages);
messageRoute.post("/send/:Id", protectRoute, sendMessage);

export default messageRoute;
