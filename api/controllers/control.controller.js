const ControlBusiness = require('../../business/control.business');

module.exports = {
  sync: async function (req, res) {
    await ControlBusiness.sync();
    return res.status(204).send();
  },

  syncAlter: async function (req, res) {
    await ControlBusiness.syncAlter();
    return res.status(204).send();
  },

  syncForce: async function (req, res) {
    await ControlBusiness.syncForce();
    return res.status(204).send();
  },
};
