const { Router } = require('express');
const ControlController = require('../controllers/control.controller');

const router = Router();

router.get('/', ControlController.sync);
router.get('/alter', ControlController.syncAlter);
router.get('/force', ControlController.syncForce);

module.exports = router;
