const container = require('./api/container');

const start = container.resolve('app');

module.exports.handler = start;
