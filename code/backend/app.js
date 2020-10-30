var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const dotenv = require('dotenv');
const {
    parsed: env
} = dotenv.config();

const rateLimit = require("express-rate-limit");
const limiter = rateLimit({
    windowMs: env.LIMIT_TIME, // 15 minutes
    max: env.LIMIT_MAX // limit each IP to 100 requests per windowMs
});

var urlRouter = require('./routes/url');
var indexRouter = require('./routes/index');

var app = express();

app.set('trust proxy', 1);
app.set('port', env.PORT || 3000);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(limiter);

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'DELETE, PUT');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    if ('OPTIONS' == req.method) {
        res.sendStatus(200);
    } else {
        next();
    }
});

app.use(env.VERSION + '/url', urlRouter);
app.use('/', indexRouter);

module.exports = app;
