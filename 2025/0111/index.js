const express = require('express');
const app = express();

app.get('/product',(req,res)=>{
    res.send("Welcome to product page");
})

// app.get('/about',(req,res)=>{
//     res.send("Welcome to about page");
// })

app.get('/product/:id',(req,res)=>{
   res.json({
    message: "succesful search",
    status : "OK",
    result: req.params.id
   })
    
})
    
const PORT = 8000;
app.listen(PORT, ()=>{
        console.log(`sever is running at port ${PORT}`);

});