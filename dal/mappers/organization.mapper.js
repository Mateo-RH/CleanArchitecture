const OrganizationEntity = require('../../business/entities/organization.entity');
const OrganizationDao = require('../dao/organization.dao');

module.exports = {
  MapToDomain: function (organization) {
    return new OrganizationEntity(organization);
  },
  MapToDao: function (organization) {
    return new OrganizationDao(organization);
  },
};
