const passport = require('passport');
const passportLocal = require('passport-local').Strategy;

// Find user by email
const findUserByEmail = (email) => {
    const user = '';
    return user;
}

// Compare password
const comparePassword = () => {
    // 
}

// Setup Passport Local Strategy
const initPassportLocal = () => {
    passport.use(new passportLocal({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    }, 
    async (req, email, password, done) => {
        
        try {
            //
        } catch (error) {
            // 
        }
    }));
}