import User from "../models/user";

export const getUsers = async (req, res) => {
  try {
    const userId = req.user._id;

    const allUser = await User.find({ _id: { $ne: userId } }).select(
      "-password",
    );

    return res.status(200).json(allUser);
  } catch (error) {
    console.log("Error in getUsers controller:", error.message);
    return res.status(500).json({ error: "Internal server error" });
  }
};
