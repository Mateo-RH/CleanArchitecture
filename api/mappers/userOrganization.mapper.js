const UserOrganizationEntity = require('../../business/entities/userOrganization.entity');
const UserOrganizationDto = require('../dtos/userOrganization.dto');

module.exports = {
  MapToDomain: function (userOrganization) {
    return new UserOrganizationEntity(userOrganization);
  },
  MapToDto: function (userOrganization) {
    return new UserOrganizationDto(userOrganization);
  },
};
