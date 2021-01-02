const db = require('../models');
const { MapToDomain, MapToDao } = require('../mappers/organization.mapper');

module.exports = {
  getOrganizations: async function () {
    const organizations = await db['organization'].findAll();
    return organizations.map(MapToDomain);
  },

  getOrganization: async function (id) {
    const organization = await db['organization'].findByPk(id);
    return MapToDomain(organization);
  },

  createOrganization: async function (organization) {
    organization = MapToDao(organization);
    const newOrganization = await db['organization'].create(organization);
    return MapToDomain(newOrganization);
  },

  updateOrganization: function (id, organization) {
    organization = MapToDao(organization);
    db['organization'].update(organization, { where: { id } });
  },

  deleteOrganization: function (id) {
    db['organization'].destroy({ where: { id } });
  },
};
