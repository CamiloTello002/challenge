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
    const { title, author, available } = req.body;

    let updateData = {};
    if (title !== undefined) updateData.title = title;
    if (author !== undefined) updateData.author = author;
    if (typeof available === 'string' && (available === 'true' || available === 'false')) {
        updateData.available = (available === 'true'); // Convert string to boolean
    }

    const newBook = new Book(updateData);
    try {
        await newBook.save()
        res.status(201).json({ title, author, available });
    } catch (err) {
        console.log(err)
        res.status(500).send('Unable to save the book')
    }
}

exports.getBook = async (req, res) => {
    const id = req.params.id;
    try {
        const book = await Book.findById(id);
        res.status(200).json({
            book
        })
    } catch (error) {
        res.status(500).send('Unable to find the book');
    }
}

exports.updateBook = async (req, res) => {
    const { title, author, available } = req.body;
    const id = req.params.id;

    let updateData = {};
    if (title !== undefined) updateData.title = title;
    if (author !== undefined) updateData.author = author;
    if (typeof available === 'string' && (available === 'true' || available === 'false')) {
        updateData.available = (available === 'true'); // Convert string to boolean
    }

    try {
        const updatedBook = await Book.findByIdAndUpdate(id, updateData, { new: true });
        if (!updatedBook) {
            return res.status(404).send('Book not found')
        }
        res.status(201).json(updatedBook)
    } catch (error) {
        res.status(500).send('Unable to update the book');
    }
}

exports.deleteBook = async (req, res) => {
    const id = req.params.id;
    try {
        await Book.findByIdAndDelete(id);
        res.status(204).send('Deleted now.');
    } catch (error) {
        res.status(500).send('Unable to delete book');
    }
}