// DEPENDENCIES GLOBAL //
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

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
    res.send('Fáilte go API Books!📗')
});

app.listen(PORT, () => {
    console.log('Beannachtaí! ón gcalafort: ', PORT);
});
