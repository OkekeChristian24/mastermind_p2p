const express = require('express');
const router = express.Router();
const passport = require('passport');

// Register a new user
router.post('/register', (req, res) => {

});

// Login a user
router.post('/login', (req, res) => {
    
});

// Validate email code
router.post('/emailcode', (req, res) => {
    
    // Validate the code time

    // Validate the code if it is the right one from the right user

    // Update the 'email_verified' column of the user

});

module.exports = router;