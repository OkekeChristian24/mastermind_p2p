const express = require('express');
const router = express.Router();
const connection = require('../config/db');



// Create Ads
// router.post();
// Read Ads
router.get('/', (req, res) => {
    connection.connect();
    connection.query('SELECT * FROM adverts', function (error, results, fields) {
        if (error) throw error;
        res.send(results);
      });
      connection.end();
});

// Edit Ads

// Delete Ads


module.exports = router;