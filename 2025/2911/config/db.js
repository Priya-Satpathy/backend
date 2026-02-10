const mysql = require('mysql2/promise');

const mysqlPool = mysql.createPool({
    host : "localhost",
    user : "root",
    password : "Priya@123",
    database : "emp_db"
})

module.exports = mysqlPool