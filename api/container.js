const { asClass, createContainer, asFunction, asValue } = require('awilix');

// app start
const StartUp = require('./application');
const config = require('../config');

// routes
const Routes = require('./router');
const { UserRoutes } = require('./routes');

// Controllers
const { UserController } = require('./controllers');

// Services
const { UserService } = require('../services');

// Business
const { UserBusiness } = require('../domain');

// Repositories
const { UserRepository } = require('../dal/repositories');

const container = createContainer();
container
  .register({
    config: asValue(config),
  })
  .register({
    app: asClass(StartUp).singleton(),
    router: asFunction(Routes).singleton(),
    UserRoutes: asFunction(UserRoutes).singleton(),
    UserController: asClass(UserController).singleton(),
  })
  .register({
    UserService: asClass(UserService).singleton(),
  })
  .register({
    UserBusiness: asClass(UserBusiness).singleton(),
  })
  .register({
    UserRepository: asClass(UserRepository).singleton(),
  });

module.exports = container;
