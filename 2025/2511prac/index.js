const express = require('express');
const mysqlPool = require('./config/db');
const router = require('./routes/studentRoute');
const app = express();


const PORT = 8000;

mysqlPool.query("SELECT 1").then(()=>{
    console.log('DB CONNECTED');
}).catch((error)=>{
    console.log(error);
})

app.use("/api/v1/student",router)

app.listen(PORT,()=>{
    console.log(`server is running at port ${PORT}`);
})