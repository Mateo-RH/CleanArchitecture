class ControlController {
  constructor({ ControlBusiness }) {
    this._controlBusiness = ControlBusiness;
  }

  async sync(req, res) {
    await this._controlBusiness.sync();
    return res.status(204).send();
  }

  async syncAlter(req, res) {
    await this._controlBusiness.syncAlter();
    return res.status(204).send();
  }

  async syncForce(req, res) {
    await this._controlBusiness.syncForce();
    return res.status(204).send();
  }
}

module.exports = ControlController;
