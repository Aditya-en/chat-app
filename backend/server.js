import express, { Router } from "express";
import authRoute from "./routes/auth.route.js";
import messageRoute from "./routes/message.route.js";
import usersRoute from "./routes/users.route.js";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectToMongoDB from "./db/connectToMongoDB.js";

dotenv.config();
const PORT = process.env.PORT || 8000;

const app = express();
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("hello world!!");
});

app.use("/api/auth", authRoute);
app.use("/api/messages", messageRoute);
app.use("/api/users", usersRoute);

app.listen(PORT, () => {
  connectToMongoDB();
  console.log("Server running at PORT :", PORT);
});
