require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const rateLimit = require("express-rate-limit");

/**/
const {corsConfig} = require("./config/cors.config");
const laravelMiddleware = require("./app/http/middleware/laravel-passport");
const {socketSetting} = require('./config/socket.config');
const {selectLanguage} = require("./config/language.config");

/**/
const apiRouter = require('./routes/api');
const userRouter = require('./routes/user');
/**/
const socketChannels = require('./channels/index');

const app = express();

/**/
socketSetting(app);
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//
app.use(limiter);
app.use(corsConfig);
app.use(selectLanguage);

app.io.on('connection', socketChannels);

app.use('/api/', apiRouter);
app.use('/api/user/', laravelMiddleware, userRouter);


module.exports = app;
