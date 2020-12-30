const express = require('express');
const Serverless = require('serverless-http');
const router = require('./api/router');

app = express();
app.use(router);

module.exports.handler = Serverless(app);
