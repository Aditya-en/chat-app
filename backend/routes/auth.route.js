import express from "express";
import {
  handle_signup,
  handle_logout,
  handle_login,
} from "../controllers/auth.controllers.js";

const authRoute = express.Router();

authRoute.post("/signup", handle_signup);
authRoute.post("/login", handle_login);
authRoute.post("/logout", handle_logout);

export default authRoute;
