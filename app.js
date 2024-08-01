'use  strict';

const dotenv = require('dotenv').config();
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Working Page')
});

PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Listening to port: ${PORT}`))