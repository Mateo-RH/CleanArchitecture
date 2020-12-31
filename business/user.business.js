const { UserRepository } = require('../dal/repositories');
const { CreateSchema, CreateMapper } = require('./schemas/user.schema');

module.exports = {
  CreateSchema,

  getUsers: async function () {
    const users = await UserRepository.getUsers();
    return users;
  },

  getUser: async function (id) {
    const user = await UserRepository.getUser(id);
    return user;
  },

  createUser: async function (user) {
    user = CreateMapper(user);
    const createdUser = await UserRepository.createUser(user);
    return createdUser;
  },

  deleteUser: async function (id) {
    await UserRepository.deleteUser(id);
  },

  updateUser: async function (id, user) {
    await UserRepository.updateUser(id, user);
  },
};
