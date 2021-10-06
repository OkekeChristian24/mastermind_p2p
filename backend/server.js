// Setting up dependencies
const express = require('express');
const path = require('path');
const dotenv = require('dotenv');

const app = express();

// Load config
dotenv.config({path: './config/config.env'})

// Body parser
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Routes
app.use('/', require('./routes/index'));
app.use('/auth', require('./routes/auth'));
app.use('/adverts', require('./routes/adverts'));



app.listen(process.env.PORT || 5000, console.log(`Server running on port ${process.env.PORT}`));
