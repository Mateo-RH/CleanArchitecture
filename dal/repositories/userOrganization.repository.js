const db = require('../models');

module.exports = {
  getUserOrganizationsWhere: function (where) {
    // TODO: join
    return db['user_organization'].findAll({ where });
  },

  createUserOrganization: function (user_organization) {
    return db['user_organization'].create(user_organization);
  },

  updateUserOrganization: function (where, user_organization) {
    return db['user_organization'].update(user_organization, { where });
  },

  deleteUserOrganization: function (where) {
    return db['user_organization'].destroy({ where });
  },
};
