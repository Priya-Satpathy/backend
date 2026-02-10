const db = require('../config/db');
async function getAllEmployee(req,res){

    
    try {
        
        const data = await db.query("SELECT * FROM employee");
        
         res.send({
            success:true,
            message: "All record found",
            errorCode:200,
            data: data[0]
        })
       
        
    } catch (error) {
         res.send({
            success:false,
            message: "No record found",
            errorCode:404,
            error
        })
       
    }
     console.log("Priya");
}
module.exports = {getAllEmployee}