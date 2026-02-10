const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const morgan = require('morgan');
const cors = require('cors');

//config
dotenv.config();

//rest api
const app = express();

//middleware
app.use(express.json())
app.use(morgan("dev"))
app.use(cors())

//db configuration

connectDB();
const PORT = process.env.PORT

//routes
app.get("/test",(req,res)=>{
    res.status(200).send("Welcome to Node Server")
})

app.listen(PORT,()=>{
    console.log(`Server is started at port ${PORT} on ${process.env.DEV_MODE} mode`)
})