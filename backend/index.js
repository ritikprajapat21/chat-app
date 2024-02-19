import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRouter from "./router/auth.js";
import messageRouter from "./router/message.js";
import userRouter from "./router/user.js";
import connect from "./db/connect.js";

dotenv.config();
const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cookieParser());

// app.get("/", (req, res) => {
//   return res.send("Hello World");
// });

app.use("/api/auth", authRouter);
app.use("/api/message", messageRouter);
app.use("/api/user", userRouter);

app.listen(PORT, async () => {
  const con = await connect();
  console.log(con);
  if (!con) return console.log("Cannot connect to database");
  console.log(`Started at ${PORT}`);
});
