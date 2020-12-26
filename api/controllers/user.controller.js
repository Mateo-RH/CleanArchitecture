class UserController {
  constructor({ UserService }) {
    this._userService = UserService;
  }

  async getUsers(req, res) {
    let users = await this._userService.getUsers();
    return res.send({
      payload: users,
    });
  }

  async getUser(req, res) {
    const { id } = req.params;
    let user = await this._userService.getUser(id);
    if (!user) {
      return res.status(404).send();
    }
    return res.send({
      payload: user,
    });
  }

  async createUser(req, res) {
    const { body } = req;
    const createdUser = await this._userService.createUser(body);
    return res.status(201).send({
      payload: createdUser,
    });
  }

  async updateUser(req, res) {
    const { body } = req;
    const { id } = req.params;

    await this._userService.updateUser(id, body);
    return res.status(204).send();
  }

  async deleteUser(req, res) {
    const { id } = req.params;
    await this._userService.deleteUser(id);
    return res.status(204).send();
  }
}

module.exports = UserController;