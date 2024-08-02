'use  strict';

const path = require("node:path");
const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
const categoryRouter = require('./router/categoryRouter');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', categoryRouter);

PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Listening to port: ${PORT}`))