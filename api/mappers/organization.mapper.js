const OrganizationEntity = require('../../business/entities/organization.entity');
const OrganizationDto = require('../dtos/organization.dto');

module.exports = {
  MapToDomain: function (organization) {
    return new OrganizationEntity(organization);
  },
  MapToDto: function (organization) {
    return new OrganizationDto(organization);
  },
};
