const express = require('express');
const router = express.Router();
//const connection = require('../config/db');
const { CreateTxn, ViewTxn, ViewTxns, CloseTxn, Deletetxn} = require("../controllers/transactionsController");


//Create Table
//id,creator_id,crypto_id,seller_id,buyer_id,
//receiving_wallet,crypto_amt,fiat_amt,fiat_id,ads_id,
//closed,cancelled,fee,created_at,updated_at
//Will be excluded in production
let sql = "CREATE TABLE transactions( id INT(255) NOT NULL AUTO_INCREMENT , creator_id TINYINT(4) NOT NULL , crypto_id TINYINT(4) NOT NULL , selller_id TINYINT(4) NOT NULL , buyer_id TINYINT(4) NOT NULL , receiving_wallet VARCHAR(255) NOT NULL , crypto_amt VARCHAR(255) NOT NULL , fiat_amt VARCHAR(255) NOT NULL , fiat_id TINYINT(4) NOT NULL , ads_id INT(255) NOT NULL , closed TINYINT(4) NOT NULL DEFAULT '0' , cancelled TINYINT(4) NOT NULL DEFAULT '0' ,fee VARCHAR(255) NOT NULL , created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP , updated_at TIMESTAMP on update CURRENT_TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP , PRIMARY KEY (id)) ENGINE = InnoDB";


router.get('/createTable', (req, res) => {
    // connection.connect();
    connection.query(sql,(err,result) => {
        if (error) throw error;
        res.send(result);
      });
});

//    Routes
// Create transaction
router.post('/create', CreateTxn);
// View all  transaction
// Lists every transaction created by a user
router.get('/creator', ViewTxns);

// View details of a particular transaction
router.get('/creator/:id',ViewTxn);

// Close a transaction
router.put('/close/:id', CloseTxn);
// Delete transactions data
router.delete('/delete/:id',DeleteTxn);


// Create txn
// let createTxnSql = "INSERT INTO transactions SET ?"
// router.post('/createtxn', (req, res) => {
//     const transaction_data = req.body

//     // Entries ought to be validated


//     connection.query(createTxnSql,[transaction_data], (err,result) => {
//         if (error) throw error;
//         res.send(result);
//       });
// });


// // Read Bank
// router.get('/:id', (req, res) => {
//     connection.query('SELECT * FROM transactions WHERE id = ?',[req.params.id], (err,result) => {
//         if (error) throw error;
//         res.send(result);
//       });
// });






// //Close Transaction
// router.put('/close/:id', (req, res) => {

  
//     // Validate the entries
  
//     // Update the data in the database
//     connection.query('UPDATE transactions SET close = 1 WHERE id = ?', req.params.id, (error, results, fields) => {
//       if (error) throw error;
//       res.send("success");
//     });
    
    
//   });

// // Delete/Cancel Bank
// router.delete('/delete/:id', (req, res) => {

//     // Make sure its the transaction creator

//     connection.query('DELETE FROM transactions WHERE id = ?;SET cancelled = 1',[req.params.id], (err,result,fields) => {
//         if (error) throw error;
//         res.send("Deleted Successfully...");
//       });
// });

module.exports = router;
