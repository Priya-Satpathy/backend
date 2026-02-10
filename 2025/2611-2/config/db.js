const mySql = require("mysql2/promise");
const mySqlPool = mySql.createPool({
    host:"localhost",
    user:"root",
    password:"Priya@123",
    database:"emp_table_db"
});

module.exports=mySqlPool;