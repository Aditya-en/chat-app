import connectToMongoDB from "./backend/db/connectToMongoDB.js";
import dotenv from "dotenv";
import Message from "./backend/models/messages.model.js";
dotenv.config();

await connectToMongoDB();

const message = new Message({
  senderId: "65e9b17cd8e1a8899e423a58",
  receiverId: "65e9b17cd8e1a8899e423a58",
  message: "hello",
});

message.save();
