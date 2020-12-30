const db = require('../models');

module.exports = {
  getUsers: function () {
    return db['user'].findAll();
  },

  getUser: function (id) {
    return db['user'].findByPk(id);
  },

  createUser: function (user) {
    return db['user'].create(user);
  },

  updateUser: function (id, user) {
    return db['user'].update(user, { where: { id } });
  },

  deleteUser: function (id) {
    return db['user'].destroy({ where: { id } });
  },
};
