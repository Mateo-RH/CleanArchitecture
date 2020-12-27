const { Router } = require('express');

module.exports = function ({ ControlController }) {
  const router = Router();

  router.get('/', ControlController.sync.bind(ControlController));
  router.get('/alter', ControlController.syncAlter.bind(ControlController));
  router.get('/force', ControlController.syncForce.bind(ControlController));

  return router;
};
