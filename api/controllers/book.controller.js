exports.getBooks = (req, res) => {
    res.status(200).send('we\'re okay');
}

exports.createBook = (req, res) => {
    const body = req.body;
    res.status(200).json({ body });
}
exports.getBook = (req, res) => {
    res.status(200).send('we\'re okay');
}
exports.updateBook = (req, res) => {
    res.status(200).send('we\'re okay');
}
exports.deleteBook = (req, res) => {
    res.status(200).send('we\'re okay');
}