// DEPENDENCIES // 
const mongoose = require('mongoose');
const { Schema } = mongoose;


// MONGOOSE CONNECTION //
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('connected to mongo on: ', process.env.MONGO_URI)
});

// BOOK SCHEMA //
const bookSchema = new Schema({
    title: String,
    description: String,
    year: Number,
    quantity: Number,
    imageURL: String
});

const Book = mongoose.model('Book', bookSchema);
module.exports = Book;