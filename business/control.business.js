class ControlBusiness {
  constructor({ ControlRepository }) {
    this._controlRepository = ControlRepository;
  }

  async sync() {
    await this._controlRepository.sync();
  }

  async syncAlter() {
    await this._controlRepository.syncAlter();
  }

  async syncForce() {
    await this._controlRepository.syncForce();
  }
}

module.exports = ControlBusiness;
