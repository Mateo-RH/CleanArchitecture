const { Router } = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const {
  UserRoutes,
  ControlRoutes,
  OrganizationRoutes,
  UserOrganizationRoutes,
} = require('./');

const router = Router();

router.use(cors()).use(bodyParser.json());

router.use('/control', ControlRoutes);
router.use('/user', UserRoutes);
router.use('/organization', OrganizationRoutes);
router.use('/user_organization', UserOrganizationRoutes);

module.exports = router;
