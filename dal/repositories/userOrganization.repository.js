const db = require('../models');
const { MapToDao, MapToDomain } = require('../mappers/userOrganization.mapper');

module.exports = {
  getUserOrganizations: async function ({ user_id, organization_id }) {
    // TODO: join
    const where = {
      ...(user_id && { user_id }),
      ...(organization_id && { organization_id }),
    };
    const userOrganizations = await db['user_organization'].findAll({ where });
    return userOrganizations.map(MapToDomain);
  },

  createUserOrganization: async function (userOrganization) {
    userOrganization = MapToDao(userOrganization);
    const newUserOrganization = await db['user_organization'].create(
      userOrganization
    );
    return MapToDomain(newUserOrganization);
  },

  updateUserOrganization: function (
    user_id,
    organization_id,
    userOrganization
  ) {
    userOrganization = MapToDao(userOrganization);
    db['user_organization'].update(userOrganization, {
      where: { user_id, organization_id },
    });
  },

  deleteUserOrganization: function (user_id, organization_id) {
    db['user_organization'].destroy({
      where: { user_id, organization_id },
    });
  },
};
