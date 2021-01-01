const { Router } = require('express');
const UserOrganizationController = require('../controllers/userOrganization.controller');
const { ErrorCatcher, ValidateSchema } = require('../middlewares');
const { POST, PATCH } = require('../schemas/userOrganization.schema');

const router = Router();

router.get(
  '/',
  ErrorCatcher.bind(UserOrganizationController.getUserOrganizations)
);
router.post(
  '/',
  ValidateSchema.bind({ schema: POST }),
  ErrorCatcher.bind(UserOrganizationController.createUserOrganization)
);
router.patch(
  '/',
  ValidateSchema.bind({ schema: PATCH }),
  ErrorCatcher.bind(UserOrganizationController.updateUserOrganization)
);
router.delete(
  '/',
  ErrorCatcher.bind(UserOrganizationController.deleteUserOrganization)
);

module.exports = router;
