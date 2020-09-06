require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

/**/
const {corsConfig} = require("./config/cors.config");
const laravelMiddleware = require("./app/http/middleware/laravel-passport");

/**/
const apiRouter = require('./routes/api');
const userRouter = require('./routes/user');

const app = express();

app.use(corsConfig);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/', apiRouter);
app.use('/api/user/', laravelMiddleware, userRouter);

module.exports = app;
