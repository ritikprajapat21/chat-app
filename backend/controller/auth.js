import User from "../models/user.js";

import bcrypt from "bcryptjs";
import generateToken from "../utils/generateTokens.js";

export const signup = async (req, res) => {
  try {
    // Retrieving data from the request body
    const { fullName, username, password, confirmPassword, gender } = req.body;

    // Checking password and confirmPassword are equal
    if (password !== confirmPassword)
      return res.status(400).json({ error: "Passwords don't match" });

    // Checking if user exists or not
    const user = await User.findOne({ username });

    if (user) return res.status(400).json({ error: "Username already exists" });

    // Generating profilePic
    const profilePic = `https://avatar.iran.liara.run/username?username=${username}&bold=true&length=1`;

    // Generating salt of hashing password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    // Creating new user
    const newUser = new User({
      fullName,
      username,
      password: hashPassword,
      confirmPassword,
      gender,
      profilePic,
    });

    if (newUser) {
      generateToken(newUser._id, res);
      await newUser.save();

      return res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        profilePic: newUser.profilePic,
      });
    }
  } catch (error) {
    console.log("Error in signup controller", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const login = (req, res) => {
  console.log("Login Request");
  res.send("Login Request");
};

export const logout = (req, res) => {
  console.log("Logout Request");
  res.send("Logout Request");
};
