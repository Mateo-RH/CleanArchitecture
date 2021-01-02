const UserBusiness = require('../../business/user.business');
const { MapToDomain, MapToDto } = require('../mappers/user.mappers');

module.exports = {
  getUsers: async function (req, res) {
    let users = await UserBusiness.getUsers();
    users = users.map(MapToDto);
    return res.send({
      payload: users,
    });
  },
  getUser: async function (req, res) {
    const { id } = req.params;
    let user = await UserBusiness.getUser(id);
    if (!user) {
      return res.status(404).send();
    }
    user = MapToDto(user);
    return res.send({
      payload: user,
    });
  },
  createUser: async function (req, res) {
    const { body } = req;
    const user = MapToDomain(body);
    let createdUser = await UserBusiness.createUser(user);
    createdUser = MapToDto(createdUser);
    return res.status(201).send({
      payload: createdUser,
    });
  },
  updateUser: async function (req, res) {
    const { body } = req;
    const { id } = req.params;
    const user = MapToDomain({ id, ...body });
    await UserBusiness.updateUser(user);
    return res.status(204).send();
  },
  deleteUser: async function (req, res) {
    const { id } = req.params;
    await UserBusiness.deleteUser(id);
    return res.status(204).send();
  },
};
