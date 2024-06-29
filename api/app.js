const express = require('express')

const app = express();

app.use(express.json());

/** Route definitions */
app.use('/book', bookRouter);
app.use('/reservation', reservationRouter);
app.use('/users', usersRouter);

module.exports = app;