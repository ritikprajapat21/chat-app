import express from "express";

import { getMessage, sendMessage } from "../controller/message.js";

const router = express.Router();

router.post("/:id", protectedRoute, getMessage);
router.post("/send/:id", protectedRoute, sendMessage);

export default router;
