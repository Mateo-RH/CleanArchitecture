class UserRepository {
  constructor({ db }) {
    this._db = db;
  }

  getUsers() {
    return this._db['user'].findAll();
  }

  getUser(id) {
    return this._db['user'].findByPk(id);
  }

  createUser(user) {
    return this._db['user'].create(user);
  }

  updateUser(id, user) {
    return this._db['user'].update(user, { where: { id } });
  }

  deleteUser(id) {
    return this._db['user'].destroy({ where: { id } });
  }
}

module.exports = UserRepository;
