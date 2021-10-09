const express = require('express');
const router = express.Router();
const passport = require('passport');
const auth = require('../middlewares/auth');
const initPassportLocal = require('../controllers/passportLocalController');
const authValidation = require('../validations/authValidation');

// Initiate all passport
initPassportLocal();


// Register a new user
router.get('/register', auth.checkLoggedOut);
router.post('/register', authValidation.validateRegister);

// Login a user
router.get('/login', auth.checkLoggedOut);
router.post('/login', authValidation.validateLogin, passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    successFlash: true,
    failureFlash: true
}));

// Validate email code
router.post('/emailcode', (req, res) => {
    
    // Validate the code time

    // Validate the code if it is the right one from the right user

    // Update the 'email_verified' column of the user

});

// Validate sms code
router.post('/smscode', (req, res) => {
    
    // Validate the code time

    // Validate the code if it is the right one from the right user

    // Update the 'p_verified' column of the user

});

module.exports = router;