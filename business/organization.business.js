const { OrganizationRepository } = require('../dal/repositories');
const { New, Update } = require('./mappers/organization.mappers');

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
    organization = New(organization);
    const createdOrganization = await OrganizationRepository.createOrganization(
      organization
    );
    return createdOrganization;
  },

  deleteOrganization: async function (id) {
    await OrganizationRepository.deleteOrganization(id);
  },

  updateOrganization: async function (id, organization) {
    organization = Update(organization);
    await OrganizationRepository.updateOrganization(id, organization);
  },
};
