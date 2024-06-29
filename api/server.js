const app = require('./app')
const mongoose = require('mongoose')
const port = process.env.PORT || 5000;

mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
        console.log(`Database connected to ${process.env.MONGODB_URI}`);
        app.listen(port, console.log(`Server started on port ${port}`));

    })
    .catch((error) => console.log(error));