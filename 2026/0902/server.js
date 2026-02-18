const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const morgan = require('morgan');
const cors = require('cors');
const router = require('./routers/userRouters');

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
const PORT = process.env.PORT || 3000;

//routes
// app.get("/test",(req,res)=>{
//     res.status(200).send("Welcome to Node Server")
// })
app.use("/api/v1",router)

app.listen(PORT,()=>{
    console.log(`Server is started at port ${PORT} on ${process.env.DEV_MODE} mode`)
})