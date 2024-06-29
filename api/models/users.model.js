const mongoose = require('mongoose');

// Esquema para usuarios
const userSchema = new mongoose.Schema({
    username: String,
    email: string
});

const User = mongoose.model('User', userSchema);

module.exports = User;