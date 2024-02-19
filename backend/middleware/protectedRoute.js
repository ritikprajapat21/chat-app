import jwt from "jsonwebtoken";

import User from "../models/user";

const protectRoute = async (req, res, next) => {
  try {
    const cookie = req.cookies.jwt;

    if (!cookie)
      return res
        .status(401)
        .json({ error: "Unauthorized - No token provided" });

    const decoded = jwt.verify(cookie, process.end.JWT_SECRET);

    if (!decoded)
      return res.status(401).json({ error: "Unauthorized - Invalid Token" });

    const user = await User.findById(decoded.userId).select("-password");

    if (!user) return res.status(404).json({ error: "User not found" });

    req.user = user;

    next();
  } catch (error) {
    console.log("Error in protectRoute:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export default protectRoute;
