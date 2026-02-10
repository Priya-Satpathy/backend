const express = require('express');
const app = express();
const dotenv = require('dotenv');
const connectDb = require('./config/db');
connectDb();
dotenv.config();
app.get('/',(req,res)=>{
    res.send("Home Page")
})

const PORT = process.env.PORT||3000;
app.listen(PORT,()=>{
    console.log(`Server is running`,PORT);
})