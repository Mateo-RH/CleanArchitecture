const { Router } = require('express');
const UserController = require('../controllers/user.controller');
const { ErrorCatcher, ValidateSchema } = require('../middlewares');

const router = Router();

router.get('/', ErrorCatcher.bind(UserController.getUsers));
router.get('/:id', ErrorCatcher.bind(UserController.getUser));
router.post(
  '/',
  ValidateSchema.bind(UserController),
  ErrorCatcher.bind(UserController.createUser)
);
router.patch(
  '/:id',
  ValidateSchema.bind(UserController),
  ErrorCatcher.bind(UserController.updateUser)
);
router.delete('/:id', ErrorCatcher.bind(UserController.deleteUser));

module.exports = router;
