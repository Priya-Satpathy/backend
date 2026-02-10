const express = require('express');
const router = require('./routes/testRoute');
const dotenv = require('dotenv')
dotenv.config();
const app = express();


app.use('/api/v1',router);
const PORT = process.env.PORT || 8000
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})