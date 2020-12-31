const { UserOrganizationRepository } = require('../dal/repositories');
const {
  CreateSchema,
  CreateMapper,
  UpdateMapper,
  UpdateSchema,
} = require('./schemas/userOrganization.schema');

module.exports = {
  CreateSchema,
  UpdateSchema,

  getUserOrganizations: async function ({ user_id, organization_id }) {
    const where = {
      ...(user_id && { user_id }),
      ...(organization_id && { organization_id }),
    };
    // TODO: 'where' is in business or dal?
    const userOrganizations = await UserOrganizationRepository.getUserOrganizationsWhere(
      where
    );
    return userOrganizations;
  },

  createUserOrganization: async function (userOrganization) {
    userOrganization = CreateMapper(userOrganization);
    const createdUserOrganization = await UserOrganizationRepository.createUserOrganization(
      userOrganization
    );
    return createdUserOrganization;
  },

  updateUserOrganization: async function (
    user_id,
    organization_id,
    userOrganization
  ) {
    userOrganization = UpdateMapper(userOrganization);
    await UserOrganizationRepository.updateUserOrganization(
      { user_id, organization_id },
      userOrganization
    );
  },

  deleteUserOrganization: async function (user_id, organization_id) {
    await UserOrganizationRepository.deleteUserOrganization(
      user_id,
      organization_id
    );
  },
};
