const express = require('express');
const colors = require('colors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const app = express();
dotenv.config();

app.use(morgan('dev'));
app.get('/',(req,res)=>{
    res.send("Welcome to home route");
})
app.get('/shop',(req,res)=>{
    res.send("Welcome to shop route");
})
app.get('/blog',(req,res)=>{
    res.send("Welcome to blog route");
})
app.get('/about',(req,res)=>{
    res.send("Welcome to about route");
})
app.get('/contactus',(req,res)=>{
    
    res.send("Welcome to contact route");
})
app.get('/cart',(req,res)=>{
    res.send("Welcome to cart route");
})

const PORT = process.env.PORT || 8000;
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`.bgGreen.rainbow);
})