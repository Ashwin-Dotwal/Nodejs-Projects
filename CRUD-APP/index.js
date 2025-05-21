import express from "express"

import mongoose from "mongoose"

import bodyParser from "body-parser"
import dotenv from 'dotenv';

import route from "./routes/userRoutes.js";


dotenv.config();
const app = express();

app.use(bodyParser.json());


const PORT = process.env.PORT || 5000;

const MONGO_URL =process.env.MONGO_URL;

console.log("Loaded MONGO_URL:", MONGO_URL); 

mongoose.connect(MONGO_URL).then(()=>{

  console.log("Database connected successful.");
  app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
  })
}).catch((error)=>console.log("❌ DB connection error:", error.message));


app.use("/api/user", route);