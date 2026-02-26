const express = require('express');
const dotenv = require('dotenv')
const morgan = require('morgan');
const cors = require('cors');
const connectDB = require('./config/db');
const router = require('./router/userRouter');


dotenv.config();
connectDB();
//config


//rest api 
const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(cors())

//routes
app.use('/api/v1',router)
const PORT = process.env.PORT||3000
app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT} at ${process.env.DEV_MODE} mode`);
    
})