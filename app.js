require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

/**/
const {corsConfig} = require("./config/cors.config");
const laravelMiddleware = require("./app/http/middleware/laravel-passport");
const {socketSetting} = require('./config/socket.config');

/**/
const apiRouter = require('./routes/api');
const userRouter = require('./routes/user');
/**/
const socketChannels = require('./channels/index');

const app = express();

/**/
socketSetting(app);

app.use(corsConfig);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.io.on('connection', socketChannels);

app.use('/api/', apiRouter);
app.use('/api/user/', laravelMiddleware, userRouter);


module.exports = app;
