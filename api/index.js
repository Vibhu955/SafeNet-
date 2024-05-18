import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import adminRoute from "./routes/admin.js";
import authRoute from "./routes/auth.js";
import cors from "cors";
import userRoute from "./routes/users.js";
import multer from "multer";
import path from "path";

const app = express();
app.use(cors());
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
// app.use(cors());

app.use((err, req, res, next) => {
    console.log("Hello from middleware");
  next();
});



app.get("/", (req, res) => {
  res.json({message : "Hello! I am Backend!"});
  console.log("Hello from backend");
});

app.use("/admin", adminRoute);

app.use("/auth", authRoute);

app.use("/user", userRoute);


const connect=async()=>{
    try {
        await mongoose.connect(process.env.MONGO, {useNewUrlParser: true,
          useUnifiedTopology: true,
      } );
        console.log("Connected to MongoDB.")
      } catch (error) {
        console.log("Error connecting to MongoDB");
        console.log(error);
      }

};

mongoose.connection.on("disconnected", ()=>{
    console.log("MongoDB disconnected!")
})

mongoose.connection.on("connected", ()=>{
    console.log("MongoDB connected!")
})

app.listen(8800, () => {
    connect();
  console.log("Server started on port 8800");
})

