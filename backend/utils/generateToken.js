import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign(
    { userId },
    "mm7QKvEpIOVBbAXZJH/4F7YT+0ikHhmSVpd+PVSQXJk=",
    {
      expiresIn: "15d",
    }
  );
  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    sameSite: "strict",
  });
};

export default generateTokenAndSetCookie;
