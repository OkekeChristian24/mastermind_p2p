const mysql = require('mysql');
const host = process.env.HOST;
const user = process.env.USER;
const password = process.env.PASSWORD;
const db = process.env.DATABASE;

module.exports = mysql.createConnection({
    host     : host,
    user     : user,
    password : password,
    database : db
});