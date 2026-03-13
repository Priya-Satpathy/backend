const express = require('express')
const dotenv = require('dotenv');
const morgan = require('morgan')
const cors = require('cors')
const connectDB = require('./config/db');
const router = require('./router/userRoute');

dotenv.config()
//rest api
const app = express();

//middleware
app.use(express.json())
app.use(morgan("dev"))
app.use(cors())
//db 
connectDB();
//route
app.get('/Home',(req,res)=>{
    res.send("Home route")
})
app.use('/api/v1',router)

const PORT = process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT} on ${process.env.DEV_MODE} mode`);
    
})