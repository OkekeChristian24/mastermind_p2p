const express = require('express');
const router = express.Router();
const connection = require('../config/db');

connection.connect((err) => {
    if(err){
        throw err;
    }
    console.log("Database connected...")
})

//Create Table
//id,user_id,account_number,bank_name,created_at,updated_at
//Will be excluded in production
let tableSql = "CREATE TABLE localbank ( id INT NOT NULL AUTO_INCREMENT , user_id INT(255) NOT NULL , account_number VARCHAR(255) NOT NULL , bank_name VARCHAR(255) NOT NULL , created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP , updated_at TIMESTAMP on update CURRENT_TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP , PRIMARY KEY (`id`)) ENGINE = InnoDB";
router.get('/createTable', (req, res) => {
    // connection.connect();
    connection.query(tableSql,(err,result,fields) => {
        if (error) throw error;
        res.send(result);
      });
});


// Create Bank
let createSql = 'INSERT INTO localbank SET ?'
router.post('/create', (req, res) => {

    connection.query(createSql,[req.body],(err,result,fields) => {
        if (error) throw error;
        res.send(result);
      });
});

// Read Bank by other users
let readSql = 'SELECT bank_name,account_number FROM localbank WHERE user_id = ? '
router.get('/view/:user_id', (req, res) => {

    connection.query(readSql,req.params.user_id, (err,result,fields) => {
        if (error) throw error;
        res.send(result);
      });
});

// Read Bank
let readOneSql = 'SELECT * FROM localbank WHERE id = ?'
router.get('/:id', (req, res) => {

    connection.query(readOneSql,req.params.id, (err,result,fields) => {
        if (error) throw error;
        res.send(result);
      });
});

// Update Bank
router.put('/update/:id', (req, res) => {
    const _data = req.body;
    const _id = req.params.id;
  
    // Validate the entries

    connection.query('UPDATE localbank SET ? WHERE id = ?', [_data],[_id], (error, results, fields) => {
      if (error) throw error;
      res.send("Update successful..");
    });
  
  });


// Delete Bank
router.delete('/delete/:id', (req, res) => {

    connection.query('DELETE FROM localbank WHERE id = ?',[req.params.id], (err,result,fields) => {
        if (error) throw error;
        res.send("Deleted Successfully");
      });
});


module.exports = router;
