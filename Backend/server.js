import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js"
import mongoose from "mongoose";
const app=express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("✅ MongoDB Connected"))
.catch(err => console.error("❌ MongoDB Error:", err));

app.use("/api/auth",authRoutes);
app.get('/',(req,res)=>{
    res.send("hello");
});
app.listen(process.env.PORT||5000,()=>{
    console.log(`Server running on port ${process.env.PORT}`)
});