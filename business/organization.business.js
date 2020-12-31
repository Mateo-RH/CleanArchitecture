const { OrganizationRepository } = require('../dal/repositories');
const {
  CreateSchema,
  UpdateSchema,
  CreateMapper,
  UpdateMapper,
} = require('./schemas/organization.schemas');

module.exports = {
  CreateSchema,
  UpdateSchema,

  getOrganizations: async function () {
    const organizations = await OrganizationRepository.getOrganizations();
    return organizations;
  },

  getOrganization: async function (id) {
    const organization = await OrganizationRepository.getOrganization(id);
    return organization;
  },

  createOrganization: async function (organization) {
    organization = CreateMapper(organization);
    const createdOrganization = await OrganizationRepository.createOrganization(
      organization
    );
    return createdOrganization;
  },

  deleteOrganization: async function (id) {
    await OrganizationRepository.deleteOrganization(id);
  },

  updateOrganization: async function (id, organization) {
    organization = UpdateMapper(organization);
    await OrganizationRepository.updateOrganization(id, organization);
  },
};
