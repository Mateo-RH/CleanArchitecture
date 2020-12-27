class ControlController {
  constructor({ ControlService }) {
    this._controlService = ControlService;
  }

  async sync(req, res) {
    await this._controlService.sync();
    return res.status(204).send();
  }

  async syncAlter(req, res) {
    await this._controlService.syncAlter();
    return res.status(204).send();
  }

  async syncForce(req, res) {
    await this._controlService.syncForce();
    return res.status(204).send();
  }
}

module.exports = ControlController;
