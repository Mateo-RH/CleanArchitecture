const db = require('../models');

module.exports = {
  getOrganizations: function () {
    return db['organization'].findAll();
  },

  getOrganization: function (id) {
    return db['organization'].findByPk(id);
  },

  createOrganization: function (organization) {
    return db['organization'].create(organization);
  },

  updateOrganization: function (id, organization) {
    return db['organization'].update(organization, { where: { id } });
  },

  deleteOrganization: function (id) {
    return db['organization'].destroy({ where: { id } });
  },
};
