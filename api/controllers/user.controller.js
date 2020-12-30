class UserController {
  constructor({ UserBusiness }) {
    this._userBusiness = UserBusiness;
  }

  async getUsers(req, res) {
    let users = await this._userBusiness.getUsers();
    if (!users) {
      return res.status(500).send();
    }
    return res.send({
      payload: users,
    });
  }

  async getUser(req, res) {
    const { id } = req.params;
    let user = await this._userBusiness.getUser(id);
    if (!user) {
      return res.status(404).send();
    }
    return res.send({
      payload: user,
    });
  }

  async createUser(req, res) {
    const { body } = req;
    const createdUser = await this._userBusiness.createUser(body);
    return res.status(201).send({
      payload: createdUser,
    });
  }

  async updateUser(req, res) {
    const { body } = req;
    const { id } = req.params;

    await this._userBusiness.updateUser(id, body);
    return res.status(204).send();
  }

  async deleteUser(req, res) {
    const { id } = req.params;
    await this._userBusiness.deleteUser(id);
    return res.status(204).send();
  }
}

module.exports = UserController;
