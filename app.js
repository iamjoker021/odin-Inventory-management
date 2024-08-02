'use  strict';

const path = require("node:path");
const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
const categoryRouter = require('./router/categoryRouter');
const itemRouter = require("./router/itemRouter");

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.use(express.urlencoded({extended: true}));

app.use('/', categoryRouter);
app.use('/category', itemRouter);

PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Listening to port: ${PORT}`))