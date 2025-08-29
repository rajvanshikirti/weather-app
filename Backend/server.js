import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app=express();
app.get('/',(req,res)=>{
    res.send("hello");
});
app.listen(process.env.PORT||5000,()=>{
    console.log(`Server running on port ${process.env.PORT}`)
});