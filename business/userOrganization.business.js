const { UserOrganizationRepository } = require('../dal/repositories');
const { New, Update } = require('./mappers/userOrganization.mappers');

module.exports = {
  getUserOrganizations: async function ({ user_id, organization_id }) {
    const userOrganizations = await UserOrganizationRepository.getUserOrganizations(
      { user_id, organization_id }
    );
    return userOrganizations;
  },

  createUserOrganization: async function (userOrganization) {
    userOrganization = New(userOrganization);
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
    userOrganization = Update(userOrganization);
    await UserOrganizationRepository.updateUserOrganization(
      user_id,
      organization_id,
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
