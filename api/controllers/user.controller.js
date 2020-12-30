const UserBusiness = require('../../business/user.business');

module.exports = {
  getUsers: async function (req, res) {
    let users = await UserBusiness.getUsers();
    if (!users) {
      return res.status(500).send();
    }
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
    return res.send({
      payload: user,
    });
  },
  createUser: async function (req, res) {
    const { body } = req;
    const createdUser = await UserBusiness.createUser(body);
    return res.status(201).send({
      payload: createdUser,
    });
  },
  updateUser: async function (req, res) {
    const { body } = req;
    const { id } = req.params;

    await UserBusiness.updateUser(id, body);
    return res.status(204).send();
  },
  deleteUser: async function (req, res) {
    const { id } = req.params;
    await UserBusiness.deleteUser(id);
    return res.status(204).send();
  },
};
