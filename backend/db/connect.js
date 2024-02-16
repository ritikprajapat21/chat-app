import mongoose from "mongoose";

export default async function connect() {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL, {
      authSource: "admin",
      user: "root",
      pass: "password",
    });

    if (!conn) return console.log("Cannot connect to database");
    console.log("Connected to database");
    return 1;
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}
