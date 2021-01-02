const UserOrganizationEntity = require('../../business/entities/userOrganization.entity');
const UserOrganizationDao = require('../dao/userOrganization.dao');

module.exports = {
  MapToDomain: function (userOrganization) {
    userOrganization.role = userOrganization.role.split(',');
    return new UserOrganizationEntity(userOrganization);
  },
  MapToDao: function (userOrganization) {
    const { role } = userOrganization;
    userOrganization.role = role && role.join(',');
    return new UserOrganizationDao(userOrganization);
  },
};
