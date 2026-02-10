const express = require('express');
const colors = require('colors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const app = express();
dotenv.config();
app.use(morgan('dev'));


app.get('/',(req,res)=>{
    res.send('welcome to home page');
})

app.get('/blog',(req,res)=>{
    res.send("Welcome I am blog page");
})




const PORT =  process.env.PORT || 8000;
app.listen(PORT,()=>{
    console.log(`Server is running on port at ${PORT}`.bgMagenta.rainbow);
})