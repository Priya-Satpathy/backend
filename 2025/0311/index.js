const express = require('express');
const app = express();

const PORT = 8000;

app.get('/',(req,res)=>{
    res.send("Hello World");
})

app.get('/register',(req,res)=>{
    console.log(req.query);
    res.send("Welcome to register page");
})
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})