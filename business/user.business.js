const { UserRepository } = require('../dal/repositories');

module.exports = {
  getUsers: async function () {
    try {
      // TODO: error handling + message passing
      const users = await UserRepository.getUsers();
      return users;
    } catch (e) {
      return null;
    }
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
