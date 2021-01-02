const { OrganizationRepository } = require('../dal/repositories');

module.exports = {
  getOrganizations: async function () {
    const organizations = await OrganizationRepository.getOrganizations();
    return organizations;
  },

  getOrganization: async function (id) {
    const organization = await OrganizationRepository.getOrganization(id);
    return organization;
  },

  createOrganization: async function (organization) {
    const createdOrganization = await OrganizationRepository.createOrganization(
      organization
    );
    return createdOrganization;
  },

  deleteOrganization: async function (id) {
    await OrganizationRepository.deleteOrganization(id);
  },

  updateOrganization: async function (organization) {
    const fields = { phone: organization.phone, address: organization.address };
    await OrganizationRepository.updateOrganization(organization.id, fields);
  },
};
