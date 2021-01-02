const db = require('../models');
const { MapToDao, MapToDomain } = require('../mappers/user.mappers');

module.exports = {
  getUsers: async function () {
    const users = await db['user'].findAll();
    return users.map(MapToDomain);
  },

  getUser: async function (id) {
    const user = await db['user'].findByPk(id);
    return MapToDomain(user);
  },

  createUser: async function (user) {
    user = MapToDao(user);
    const newUser = await db['user'].create(user);
    return MapToDomain(newUser);
  },

  updateUser: function (id, user) {
    user = MapToDao(user);
    // Return number of updated rows
    db['user'].update(user, { where: { id } });
  },

  deleteUser: function (id) {
    // Return number of deleted rows
    db['user'].destroy({ where: { id } });
  },
};
