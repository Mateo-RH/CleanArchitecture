const OrganizationBusiness = require('../../business/organization.business');

module.exports = {
  getOrganizations: async function (req, res) {
    let organizations = await OrganizationBusiness.getOrganizations();
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
    return res.send({
      payload: organization,
    });
  },
  createOrganization: async function (req, res) {
    const { body } = req;
    let createdOrganization = await OrganizationBusiness.createOrganization(
      body
    );
    return res.status(201).send({
      payload: createdOrganization,
    });
  },
  updateOrganization: async function (req, res) {
    const { body } = req;
    const { id } = req.params;
    await OrganizationBusiness.updateOrganization(id, body);
    return res.status(204).send();
  },
  deleteOrganization: async function (req, res) {
    const { id } = req.params;
    await OrganizationBusiness.deleteOrganization(id);
    return res.status(204).send();
  },
};
