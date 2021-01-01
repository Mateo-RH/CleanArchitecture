const { UserRepository } = require('../dal/repositories');
const { New, Update } = require('./mappers/user.mappers');

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
    user = New(user);
    const createdUser = await UserRepository.createUser(user);
    return createdUser;
  },

  deleteUser: async function (id) {
    await UserRepository.deleteUser(id);
  },

  Update: async function (id, user) {
    user = Update(user);
    await UserRepository.Update(id, user);
  },
};
