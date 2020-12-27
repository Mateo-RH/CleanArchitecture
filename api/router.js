const { Router } = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

module.exports = function ({ UserRoutes, ControlRoutes }) {
  const router = Router();

  router.use(cors()).use(bodyParser.json());

  router.use('/user', UserRoutes);
  router.use('/control', ControlRoutes);

  return router;
};
