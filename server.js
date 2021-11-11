require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 8080;

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
})

mongoose.connect(process.env.DATABASE)

