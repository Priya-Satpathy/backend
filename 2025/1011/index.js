const express = require('express');

const app = express();



app.use(express.json());
app.get('/',(req,res)=>{
    res.send("Welcome to my Home Page");
})
app.post('/',(req,res)=>{
    res.send("Welcome , I am post route");
})

app.post('/register',(req,res)=>{
    console.log(req.body.userName);
    res.send("Welcome , I am register route");
})


const PORT = 8000;
app.listen(PORT,()=>{
    console.log(`Server is running on port at  ${PORT}`);
})