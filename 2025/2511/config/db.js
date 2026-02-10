const mysql = require('mysql2/promise');

const mySqlPool = mysql.createPool({
   host: "localhost",
    user : "root",
    password: "Priya@123",
    database : "student_db1"
})
module.exports = mySqlPool