const UserOrganizationBusiness = require('../../business/userOrganization.business');
const { MapToDomain, MapToDto } = require('../mappers/userOrganization.mapper');

module.exports = {
  getUserOrganizations: async function (req, res) {
    const { user_id, organization_id } = req.query;
    let userOrganizations = await UserOrganizationBusiness.getUserOrganizations(
      {
        user_id,
        organization_id,
      }
    );
    userOrganizations = userOrganizations.map(MapToDto);
    return res.send({
      payload: userOrganizations,
    });
  },
  createUserOrganization: async function (req, res) {
    const { body } = req;
    const userOrganization = MapToDomain(body);
    let createdUserOrganization = await UserOrganizationBusiness.createUserOrganization(
      userOrganization
    );
    return res.status(201).send({
      payload: createdUserOrganization,
    });
  },
  updateUserOrganization: async function (req, res) {
    const { user_id, organization_id } = req.query;
    if (!user_id || !organization_id) {
      return res
        .status(400)
        .send(
          `Missing params: ${!user_id ? "'user_id' " : ''}${
            !organization_id ? "'organization_id'" : ''
          }`
        );
    }
    const { body } = req;
    const userOrganization = MapToDomain({ user_id, organization_id, ...body });
    await UserOrganizationBusiness.updateUserOrganization(userOrganization);
    return res.status(204).send();
  },
  deleteUserOrganization: async function (req, res) {
    const { user_id, organization_id } = req.query;
    if (!user_id || !organization_id) {
      return res
        .status(400)
        .send(
          `Missing params: ${!user_id ? "'user_id' " : ''}${
            !organization_id ? "'organization_id'" : ''
          }`
        );
    }
    await UserOrganizationBusiness.deleteUserOrganization(
      user_id,
      organization_id
    );
    return res.status(204).send();
  },
};
