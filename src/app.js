import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDb from "./config/db.js";
dotenv.config();
const port = process.env.PORT || 4000;
const app = express();

app.use(cors());

connectDb();

app.use(express.json());

app.listen(port, () => {
  console.log(`project listen on port : ${port}`);
});
