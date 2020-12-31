const { Router } = require('express');
const ControlController = require('../controllers/control.controller');
const { ErrorCatcher } = require('../middlewares');

const router = Router();

router.get('/', ErrorCatcher.bind(ControlController.sync));
router.get('/alter', ErrorCatcher.bind(ControlController.syncAlter));
router.get('/force', ErrorCatcher.bind(ControlController.syncForce));

module.exports = router;
