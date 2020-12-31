const { Router } = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { UserRoutes, ControlRoutes } = require('./');

const router = Router();

router.use(cors()).use(bodyParser.json());

router.use('/user', UserRoutes);
router.use('/control', ControlRoutes);

module.exports = router;
