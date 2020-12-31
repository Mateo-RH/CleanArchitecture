const UserBusiness = require('../../business/user.business');

module.exports = {
  validateSchema: function (req, res, next) {
    const { body } = req;
    try {
      UserBusiness.validateSchema(body);
      next();
    } catch (e) {
      return res.status(400).send(e.message);
    }
  },

  getUsers: async function (req, res) {
    try {
      let users = await UserBusiness.getUsers();
      return res.send({
        payload: users,
      });
    } catch (e) {
      return res.status(500).send({
        message: 'internal server error',
      });
    }
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
    try {
      const createdUser = await UserBusiness.createUser(body);
      return res.status(201).send({
        payload: createdUser,
      });
    } catch (e) {
      const statusCode = e.statusCode || 500;
      const error = e.error || 'internal server error';
      return res.status(statusCode).send({ error });
    }
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
