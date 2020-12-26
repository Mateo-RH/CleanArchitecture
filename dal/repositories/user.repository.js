const connectToDatabase = require('../models');
// TODO: Improve connection with db

class UserRepository {
  async getModel() {
    // TODO: manejo de error al fallar conexion
    const { user } = await connectToDatabase();
    return user;
  }

  async getUsers() {
    const userModel = await this.getModel();
    return await userModel.findAll();
  }

  async getUser(id) {
    const userModel = await this.getModel();
    return await userModel.findByPk(id);
  }

  async createUser(user) {
    const userModel = await this.getModel();
    return await userModel.create(user);
  }

  async updateUser(id, user) {
    const userModel = await this.getModel();
    return await userModel.update(user, { where: { id } });
  }

  async deleteUser(id) {
    const userModel = await this.getModel();
    return await userModel.destroy({ where: { id } });
  }
}

module.exports = UserRepository;
