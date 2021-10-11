const mysql = require('mysql');
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);


const host = process.env.HOST;
const user = process.env.USER;
const password = process.env.PASSWORD;
const db = process.env.DATABASE;

const dbOptions = {
    connectionLimit: 10,
    host     : host,
    user     : user,
    password : password,
    database : db
};

const pool = mysql.createPool(dbOptions);


const sessionOptions = {
    // Whether or not to automatically check for and clear expired sessions:
    clearExpired: true,
    
    // How frequently expired sessions will be cleared; milliseconds:
    checkExpirationInterval: 900000,
    
    // The maximum age of a valid session; milliseconds:
    expiration: 86400000,
    
    // Whether or not to create the sessions database table, if one does not already exist:
    createDatabaseTable: true,
    
    // Whether or not to end the database connection when the store is closed.
    // The default value of this option depends on whether or not a connection was passed to the constructor.
    // If a connection object is passed to the constructor, the default value for this option is false.
    endConnectionOnClose: true,
    charset: 'utf8mb4_bin',
    schema: {
        tableName: 'sessions',
        columnNames: {
            session_id: 'session_id',
            expires: 'expires',
            data: 'data'
        }
    }
};

const sessionStore = new MySQLStore(sessionOptions, pool);

module.exports = {
    pool,
    sessionStore
};