class ControlRepository {
  constructor({ db }) {
    this._db = db;
  }

  async sync() {
    await this._db.sequelize.sync();
  }

  async syncAlter() {
    await this._db.sequelize.sync({ alter: true });
  }

  async syncForce(id) {
    await this._db.sequelize.sync({ force: true });
  }
}

module.exports = ControlRepository;
