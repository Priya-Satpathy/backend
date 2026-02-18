const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');


//config

dotenv.config();

//db config
connectDB();
//rest api
const app = express();

//route
app.get("/test",(req,res)=>{
    res.send("Welcome to node server");
})

//port
const PORT = process.env.PORT || 3000

//listen
app.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT} on ${process.env.DEV_MODE}`)
})