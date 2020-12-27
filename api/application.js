const express = require('express');
const Serverless = require('serverless-http');

module.exports = function ({ router }) {
  app = express();
  app.use(router);

  return Serverless(app);
};
