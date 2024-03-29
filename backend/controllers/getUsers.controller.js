import User from "../models/user.model.js";

export default async function getUsersForSidebar(req, res) {
  try {
    const loggedInUser = req.user._id;
    const allUsers = await User.find({ _id: { $ne: loggedInUser } }).select("-password");
    res.status(200).json(allUsers);
  } catch (error) {
    console.log("Error in getUsers controllers", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
}
