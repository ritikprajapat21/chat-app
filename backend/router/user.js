import express from "express";

import { getUsers } from "../controller/user.js";
import { protectRoute } from "../middleware/protectedRoute.js";

const router = express.Router();

router.get("/", protectRoute, getUsers);

export default router;
