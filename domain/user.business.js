class UserBusiness {
  constructor({ UserRepository }) {
    this._userRepository = UserRepository;
  }

  async getUsers() {
    const users = await this._userRepository.getUsers();
    return users;
  }

  async getUser(id) {
    const user = await this._userRepository.getUser(id);
    return user;
  }

  async createUser(user) {
    const createdUser = await this._userRepository.createUser(user);
    return createdUser;
  }

  async deleteUser(id) {
    return await this._userRepository.deleteUser(id);
  }

  async updateUser(id, user) {
    const updatedUser = await this._userRepository.updateUser(id, user);
    return updatedUser;
  }
}

module.exports = UserBusiness;
