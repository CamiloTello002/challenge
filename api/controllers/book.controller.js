const Book = require('./../models/book.model');

exports.getBooks = async (req, res) => {
    try {
        const books = await Book.find({});
        res.status(200).json({ books });
    } catch (error) {
        res.status(500).send('Unable to get all books');
    }
}

exports.createBook = async (req, res) => {
    const { title, author } = req.body;
    const newBook = new Book({ title, author });
    try {
        await newBook.save()
        res.status(201).json({ title, author });
    } catch (err) {
        console.log(err)
        res.status(500).send('Unable to save the book')
    }
}

exports.getBook = (req, res) => {
    res.status(200).send('we\'re okay');
}

exports.updateBook = (req, res) => {
    res.status(200).send('we\'re okay');
}

exports.deleteBook = async (req, res) => {
    const id = req.params.id;
    await Book.findByIdAndDelete(id);
    res.status(204).send('Deleted now.');
}