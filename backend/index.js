import express from "express";
import dotenv from "dotenv";

import authRouter from "./router/auth.js";
import connect from "./db/connect.js";

dotenv.config();
const app = express();
const PORT = 3001;

app.use(express.json());

app.get("/", (req, res) => {
  return res.send("Hello World");
});

app.use("/auth", authRouter);

app.listen(PORT, async () => {
  const con = await connect();
  console.log(con);
  if (!con) return console.log("Cannot connect to database");
  console.log(`Started at ${PORT}`);
});
