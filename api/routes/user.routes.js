const { Router } = require('express');
const UserController = require('../controllers/user.controller');
const { ErrorCatcher, ValidateSchema } = require('../middlewares');
const { POST, PATCH } = require('../schemas/user.schema');

const router = Router();

router.get('/', ErrorCatcher.bind(UserController.getUsers));
router.get('/:id', ErrorCatcher.bind(UserController.getUser));
router.post(
  '/',
  ValidateSchema.bind(POST),
  ErrorCatcher.bind(UserController.createUser)
);
router.patch(
  '/:id',
  ValidateSchema.bind(PATCH),
  ErrorCatcher.bind(UserController.updateUser)
);
router.delete('/:id', ErrorCatcher.bind(UserController.deleteUser));

module.exports = router;
