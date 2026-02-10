const express = require("express");
const mysqlPool = require('./config/db');
const router = require("./routes/employeeRoute");

const app = express();


const PORT = 8000;

mysqlPool.query("SELECT 1").then(()=>{
    console.log('DB CONNECTED');
}).catch((error)=>{
    console.log(error);
})

app.use("/api/v1/employee",router)


app.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT}`);
})