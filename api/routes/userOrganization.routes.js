const { Router } = require('express');
const UserOrganizationController = require('../controllers/userOrganization.controller');
const { ErrorCatcher, ValidateSchema } = require('../middlewares');

const router = Router();

router.get(
  '/',
  ErrorCatcher.bind(UserOrganizationController.getUserOrganizations)
);
router.post(
  '/',
  ValidateSchema.bind(UserOrganizationController),
  ErrorCatcher.bind(UserOrganizationController.createUserOrganization)
);
router.patch(
  '/',
  ValidateSchema.bind(UserOrganizationController),
  ErrorCatcher.bind(UserOrganizationController.updateUserOrganization)
);
router.delete(
  '/',
  ErrorCatcher.bind(UserOrganizationController.deleteUserOrganization)
);

module.exports = router;
