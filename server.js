require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const router = require('./Routers/router');
const app = express();
const port = 8080;

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
})

app.use('/', router)

mongoose.connect(process.env.DATABASE, () => {
    console.log('DB connected');
})

