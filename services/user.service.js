class UserService {
  constructor({ UserBusiness }) {
    this._userBusiness = UserBusiness;
  }

  async getUsers() {
    return await this._userBusiness.getUsers();
  }

  async getUser(id) {
    return await this._userBusiness.getUser(id);
  }

  async createUser(user) {
    return await this._userBusiness.createUser(user);
  }

  async updateUser(id, user) {
    return await this._userBusiness.updateUser(id, user);
  }

  async deleteUser(id) {
    return await this._userBusiness.deleteUser(id);
  }
}

module.exports = UserService;
