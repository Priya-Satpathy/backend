const express = require('express')
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const morgan = require('morgan')
const cors = require('cors');
const router = require('./routers/userRouters');

//config
dotenv.config();
//rest api
const app = express();

//middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(cors())

connectDB();
//port
const PORT = process.env.PORT || 3000;

//test api
app.use("/api/v1",router)

app.listen(PORT,()=>{
    console.log(`Server is running at port at ${PORT} on ${process.env.DEV_MODE}`)
})