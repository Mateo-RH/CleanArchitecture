const express = require('express');
const Serverless = require('serverless-http');
const router = require('./api/routes/router');

app = express();
app.use(router);

module.exports.handler = Serverless(app);
