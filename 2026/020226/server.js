const express = require('express');
const app = express();
app.use(express.json());
app.get('/search/:id',(req,res)=>{
    console.log(req.params);
    res.send("Welcome to Home Route");
})
app.get('/search',(req,res)=>{
    console.log(req.query);
    res.send("Welcome to Home Route");
})
app.post('/',(req,res)=>{
    console.log(req.body);
    res.send("welcome to Post Route")
})
const PORT = 8000;
app.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT}`);
})