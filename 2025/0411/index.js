const express = require('express');
const app = express();

const PORT = 8000;

app.get('/home',(req,res)=>{
    res.send("Welcome to my Home Page");
})
app.get('/register',(req,res)=>{
    res.send("Welcome to sign up page");
})

app.post('/signup',(req,res)=>{
    res.send("ACcount registered successfully");
})

app.listen(PORT,()=>{
    console.log(`Server is running on port at  ${PORT}`);
})