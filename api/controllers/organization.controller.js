const OrganizationBusiness = require('../../business/organization.business');
const { MapToDto, MapToDomain } = require('../mappers/organization.mapper');

module.exports = {
  getOrganizations: async function (req, res) {
    let organizations = await OrganizationBusiness.getOrganizations();
    organizations = organizations.map(MapToDto);
    return res.send({
      payload: organizations,
    });
  },
  getOrganization: async function (req, res) {
    const { id } = req.params;
    let organization = await OrganizationBusiness.getOrganization(id);
    if (!organization) {
      return res.status(404).send();
    }
    organization = MapToDto(organization);
    return res.send({
      payload: organization,
    });
  },
  createOrganization: async function (req, res) {
    const { body } = req;
    const organization = MapToDomain(body);
    let createdOrganization = await OrganizationBusiness.createOrganization(
      organization
    );
    createdOrganization = MapToDto(createdOrganization);
    return res.status(201).send({
      payload: createdOrganization,
    });
  },
  updateOrganization: async function (req, res) {
    const { body } = req;
    const { id } = req.params;
    const organization = MapToDomain({ id, ...body });
    await OrganizationBusiness.updateOrganization(organization);
    return res.status(204).send();
  },
  deleteOrganization: async function (req, res) {
    const { id } = req.params;
    await OrganizationBusiness.deleteOrganization(id);
    return res.status(204).send();
  },
};
