const express = require('express')

/** Importing routers from ./routes */
const bookRouter = require('./routes/book.routes')
const reservationRouter = require('./routes/reservation.routes')
const usersRouter = require('./routes/users.routes')

const app = express();

app.use(express.json());

/** Route definitions */
app.use('/book', bookRouter);
app.use('/reservation', reservationRouter);
app.use('/users', usersRouter);

module.exports = app;