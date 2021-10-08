// Setting up dependencies
const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');

const app = express();

// Load config
dotenv.config({path: './config/config.env'})

// Cookie parser
app.use(cookieParser(process.env.SESSION_SECRET));

// Body parser
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Session setup
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 // 86400000 1 day
    }
}));

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/', require('./routes/index'));
app.use('/auth', require('./routes/auth'));
app.use('/adverts', require('./routes/adverts'));
// app.use('/transactions', require('./routes/transactions'));
// app.use('/localbanks', require('./routes/localbanks'));



app.listen(process.env.PORT || 5000, console.log(`Server running on port ${process.env.PORT}`));
