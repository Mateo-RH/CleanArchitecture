const db = require('../models');

module.exports = {
  getUserOrganizations: function ({ user_id, organization_id }) {
    const where = {
      ...(user_id && { user_id }),
      ...(organization_id && { organization_id }),
    };
    // TODO: join
    return db['user_organization'].findAll({ where });
  },

  createUserOrganization: function (user_organization) {
    return db['user_organization'].create(user_organization);
  },

  updateUserOrganization: function (
    user_id,
    organization_id,
    user_organization
  ) {
    return db['user_organization'].update(user_organization, {
      where: { user_id, organization_id },
    });
  },

  deleteUserOrganization: function (user_id, organization_id) {
    return db['user_organization'].destroy({
      where: { user_id, organization_id },
    });
  },
};
