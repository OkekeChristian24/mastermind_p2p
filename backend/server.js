// Setting up dependencies
const express = require('express');
const path = require('path');

const app = express();
const router = express.Router();

// Body parser
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Routes
app.use('/', require('./routes/index'));
app.use('/auth', require('./routes/auth'));





app.listen(8000);
