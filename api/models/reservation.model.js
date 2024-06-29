const mongoose = require('mongoose');

// Esquema para reservas
const reservationSchema = new mongoose.Schema({
    dateReserved: Date,
    dateDue: Date,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    book: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book'
    }
});

const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports = Reservation;