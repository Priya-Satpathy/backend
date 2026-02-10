const express = require("express");
const db = require("../config/db");
const router = express.Router();

router.get("/getall",async (req,res)=>{
   try{
        const data=await db.query("SELECT COUNT(COMM) FROM EMPL1");
    
      res.send({
        success: true,
        message : "All record found",
        "errorCode": 202,
        data : data[0]
    
    });

   }catch(error){
    res.send({
        success: false,
        message : "No record found",
        errorCode: 404,
        error
    })
   }


    
})

module.exports = router;