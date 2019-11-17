"use static";
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

// CORS middleware
const allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Access-Control-Allow-Headers', '*');
    next();
}
app.use(allowCrossDomain);

router.use(logger('dev'));
router.use(cookieParser());
router.use(express.static(path.join(__dirname, 'public')));
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

// routes
router.get('*', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.use(router);

module.exports = app;