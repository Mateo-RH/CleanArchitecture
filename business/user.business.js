// TODO: how to apply dip
const { UserRepository } = require('../dal/repositories');

module.exports = {
  getUsers: async function () {
    const users = await UserRepository.getUsers();
    return users;
  },

  getUser: async function (id) {
    const user = await UserRepository.getUser(id);
    return user;
  },

  createUser: async function (user) {
    user.isDisabled = false;
    const createdUser = await UserRepository.createUser(user);
    return createdUser;
  },

  deleteUser: async function (id) {
    await UserRepository.deleteUser(id);
  },

  updateUser: async function (user) {
    const fields = { name: user.name };
    await UserRepository.updateUser(user.id, fields);
  },
};
