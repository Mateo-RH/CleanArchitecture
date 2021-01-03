const { UserRepository } = require('../dal/repositories');

module.exports = {
  getUsers: async function () {
    const users = await UserRepository.getAll();
    return users;
  },

  getUser: async function (id) {
    const user = await UserRepository.getOne(id);
    return user;
  },

  createUser: async function (user) {
    user.isDisabled = false;
    const createdUser = await UserRepository.create(user);
    return createdUser;
  },

  deleteUser: async function (id) {
    await UserRepository.delete(id);
  },

  updateUser: async function (user) {
    const fields = { name: user.name };
    await UserRepository.update(user.id, fields);
  },
};
