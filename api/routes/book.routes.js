const express = require('express');

const bookController = require('./../controllers/book.controller');

const router = express.Router();

router.route('/')
    .get(bookController.createUser)
    .post();

router.route('/:id')
    .get()
    .put()
    .delete();

module.exports = router;