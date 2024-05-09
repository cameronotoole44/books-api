// DEPENDENCIES GLOBAL //
const express = require('express');
const mongoose = require('mongoose');

// CONFIG //
require('dotenv').config();
const PORT = process.env.PORT;
const app = express();

//MIDDLEWARE //
app.use(express.urlencoded({ extended: true }));

// BOOKS CONTROLLER //
const booksController = require('./controllers/books_controller');
app.use('/books', booksController);

// ROUTES //
app.get('/', (req, res) => {
    res.send('Welcome to the Books API!')
});

app.listen(PORT, () => {
    console.log('Greetings! From port: ', PORT);
});
