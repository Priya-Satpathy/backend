const express = require('express')
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const morgan = require('morgan');
const cors = require('cors');
const router = require('./router/userRouter');
//rest api
const app = express();

app.use(express.json())
app.use(morgan("dev"))
app.use(cors())
//config
dotenv.config();

//db config
connectDB();
//routes
app.get('/',(req,res)=>{
    res.status(200).send("Home Route")
})
app.use('/api/v1',router)
const PORT = process.env.PORT||3000

app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT} at ${process.env.DEV_MODE}`);
    
})