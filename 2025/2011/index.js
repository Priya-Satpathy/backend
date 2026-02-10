const express = require('express');
const router = require('./routers/testRouter');

const app = express();

app.use('/api/v1',router)
const PORT = process.env.PORT || 8000
app.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT}`);
    
})