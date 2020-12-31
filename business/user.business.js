const { UserRepository } = require('../dal/repositories');
const validateJsonSchema = require('../services/jsonschemas');
const userSchema = require('./models/user.model');

module.exports = {
  validateSchema: function (user) {
    validateJsonSchema(user, userSchema);
  },

  getUsers: async function () {
    const users = await UserRepository.getUsers();
    return users;
  },

  getUser: async function (id) {
    const user = await UserRepository.getUser(id);
    return user;
  },

  createUser: async function (user) {
    const createdUser = await UserRepository.createUser(user);
    return createdUser;
  },

  deleteUser: async function (id) {
    return await UserRepository.deleteUser(id);
  },

  updateUser: async function (id, user) {
    const updatedUser = await UserRepository.updateUser(id, user);
    return updatedUser;
  },
};
