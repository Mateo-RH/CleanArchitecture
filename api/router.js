const { Router } = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { UserRoutes } = require('./routes');

const router = Router();

router.use(cors()).use(bodyParser.json());

router.use('/user', UserRoutes);

module.exports = router;
