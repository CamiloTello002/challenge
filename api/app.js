const express = require('express')

const app = express();
app.use(() => console.log('hola a todos'))

app.use(express.json());

module.exports = app;