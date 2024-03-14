import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res
        .status(401)
        .json({ error: "Unauthorized - no token provided" });
    }

    const decoded = jwt.verify(
      token,
      "mm7QKvEpIOVBbAXZJH/4F7YT+0ikHhmSVpd+PVSQXJk="
    );

    if (!decoded) {
      return res.status(401).json({ error: "Unauthorized - invalid token" });
    }

    const user = await User.findById(decoded.userId).select("-password");

    if (!user) {
      return res.status(401).json({ error: "user not found" });
    }

    req.user = user;

    next();
  } catch (error) {
    console.log("Error : ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export default protectRoute;
