const mongoose = require('mongoose');

// Esquema para libros
const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    available: Boolean
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;