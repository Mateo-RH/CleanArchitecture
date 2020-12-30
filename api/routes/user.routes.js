const { Router } = require('express');
const UserController = require('../controllers/user.controller');

const router = Router();

router.get('/', UserController.getUsers);
router.get('/:id', UserController.getUser);
router.post('/', UserController.createUser);
router.patch('/:id', UserController.updateUser);
router.delete('/:id', UserController.deleteUser);

module.exports = router;
