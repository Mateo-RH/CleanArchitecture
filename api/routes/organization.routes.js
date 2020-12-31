const { Router } = require('express');
const OrganizationController = require('../controllers/organization.controller.js');
const { ErrorCatcher, ValidateSchema } = require('../middlewares');

const router = Router();

router.get('/', ErrorCatcher.bind(OrganizationController.getOrganizations));
router.get('/:id', ErrorCatcher.bind(OrganizationController.getOrganization));
router.post(
  '/',
  ValidateSchema.bind(OrganizationController),
  ErrorCatcher.bind(OrganizationController.createOrganization)
);
router.patch(
  '/:id',
  ValidateSchema.bind(OrganizationController),
  ErrorCatcher.bind(OrganizationController.updateOrganization)
);
router.delete(
  '/:id',
  ErrorCatcher.bind(OrganizationController.deleteOrganization)
);

module.exports = router;
