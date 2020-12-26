const container = require('./api/container');

const application = container.resolve('app');

module.exports.handler = application.start();
