require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');
const logger = require('morgan');
const rateLimit = require("express-rate-limit");
require('module-alias/register')

/**/
const {corsConfig} = require("./config/cors.config");
const laravelMiddleware = require("./app/http/middleware/laravel-passport");
const {teacherAccessMiddleware} = require("./app/http/middleware/teacher-access");
const {socketSetting} = require('./config/socket.config');
const {selectLanguage} = require("./config/language.config");

/**/
const apiRouter = require('./routes/api');
const userRouter = require('./routes/user');
const teacherRouter = require('./routes/teacher');
/**/
const socketChannels = require('./channels/index');

const app = express();

/**/
socketSetting(app);
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    // max: 100 // limit each IP to 100 requests per windowMs
    max: 10000 // limit each IP to 100 requests per windowMs
});

app.use(logger('dev'));
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb', extended: false}));
app.use(cookieParser());
app.use(fileUpload());
app.use(express.static(path.join(__dirname, 'public')));

//
app.use(limiter);
app.use(corsConfig);
app.use(selectLanguage);

app.io.on('connection', socketChannels);

app.use('/api/', apiRouter);
app.use('/api/user/', laravelMiddleware, userRouter);
app.use('/api/user/teacher/', laravelMiddleware, teacherAccessMiddleware, teacherRouter);


module.exports = app;
