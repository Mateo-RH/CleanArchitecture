const { UserOrganizationRepository } = require('../dal/repositories');

module.exports = {
  getUserOrganizations: async function ({ user_id, organization_id }) {
    const userOrganizations = await UserOrganizationRepository.getUserOrganizations(
      { user_id, organization_id }
    );
    return userOrganizations;
  },

  createUserOrganization: async function (userOrganization) {
    const createdUserOrganization = await UserOrganizationRepository.createUserOrganization(
      userOrganization
    );
    return createdUserOrganization;
  },

  updateUserOrganization: async function (userOrganization) {
    const fields = {
      role: userOrganization.role,
      position: userOrganization.position,
    };
    await UserOrganizationRepository.updateUserOrganization(
      userOrganization.user_id,
      userOrganization.organization_id,
      fields
    );
  },

  deleteUserOrganization: async function (user_id, organization_id) {
    await UserOrganizationRepository.deleteUserOrganization(
      user_id,
      organization_id
    );
  },
};
