const express = require('express');
const Serverless = require('serverless-http');

class Application {
  // Express configuration to use router and serverless
  constructor({ router }) {
    this._express = express();
    this._express.use(router);
  }

  start() {
    return Serverless(this._express);
  }
}

module.exports = Application;
