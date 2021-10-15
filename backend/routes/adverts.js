const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const adValidation = require('../validations/advertValidation');




// Create Ads
router.get('/create', auth.checkLoggedIn);

router.post('/create', adValidation.validateCreate, (req, res) => {
  
  const adverts = req.body;

  // Validate entries

  // Insert into the database
  connection.query('INSERT INTO adverts SET ?', adverts, (error, results, fields) => {
    if (error) throw error;
    console.log(results.insertId);
    res.send("success");
  });
  connection.end();


});

// Read all Ads
router.get('/', (req, res) => {
    connection.connect();
    connection.query('SELECT * FROM adverts', function (error, results, fields) {
        if (error) throw error;
        res.send(results);
      });
      connection.end();
});

// Read one Ad
router.get('/:id', (req, res) => {

  const ad_id = req.params.id;
  connection.query('SELECT * FROM adverts WHERE id = ? ', ad_id, function (error, results, fields) {
    if (error) throw error;
    res.send(results);
  });
});

// Edit an Ad
router.put('/edit/:id', (req, res) => {
  connection.connect();
  const adverts = req.body;
  const ads_id = req.params.id;

  // Check if user is authorised to edit the ad


  // Validate the entries

  // Update the data in the database
  connection.query('UPDATE adverts SET ? WHERE id = ?', [adverts, ads_id], (error, results, fields) => {
    if (error) throw error;
    res.send("success");
  });
  connection.end();


});

// Close an Ad
router.put('/close/:id', (req, res) => {
  
  // Check if user is authorised to close the ad

  // Validate the entries

  // Update the data in the database
  connection.query('UPDATE adverts SET close = 1 WHERE id = ?', ads_id, (error, results, fields) => {
    if (error) throw error;
    res.send("success");
  });
  
  
});


// Delete Ads
router.delete('/delete/:id', (req, res) => {
  connection.connect();
  
  // Check if user is authorised to delete the ad

  connection.query('DELETE FROM adverts WHERE id = ?', req.params.id, (error, results, fields) => {
    if (error) throw error;
    res.send("success");
  });
});


module.exports = router;