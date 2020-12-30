const { asClass, createContainer, asFunction, asValue } = require('awilix');

// app start
const StartUp = require('./application');
const config = require('../config');

// routes
const Routes = require('./router');
const { UserRoutes, ControlRoutes } = require('./routes');

// Controllers
const { UserController, ControlController } = require('./controllers');

// Business
const { UserBusiness, ControlBusiness } = require('../business');

// Repositories
const db = require('../dal/models');
const { UserRepository, ControlRepository } = require('../dal/repositories');

const container = createContainer();
container
  .register({
    config: asValue(config),
  })
  .register({
    app: asFunction(StartUp).singleton(),
    router: asFunction(Routes).singleton(),
    UserRoutes: asFunction(UserRoutes).singleton(),
    UserController: asClass(UserController).singleton(),
    ControlRoutes: asFunction(ControlRoutes).singleton(),
    ControlController: asClass(ControlController).singleton(),
  })
  .register({
    UserBusiness: asClass(UserBusiness).singleton(),
    ControlBusiness: asClass(ControlBusiness).singleton(),
  })
  .register({
    db: asValue(db),
    UserRepository: asClass(UserRepository).singleton(),
    ControlRepository: asClass(ControlRepository).singleton(),
  });

module.exports = container;
