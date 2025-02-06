import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
const app = express();

app.use(cors());

const Port = (process.env.PORT as string) || 3000;
app.listen(Port, async () => {
  console.log(`backend is running ${Port}`);
  try {
    console.log("server is connected to database");
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
});
