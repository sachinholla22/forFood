const mysql=require('mysql');

const db=mysql.createConnection({
host:"localhost",
user:"sachin",
password:"1234567",
database: "fooddb"
})
module.exports =db