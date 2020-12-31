const { ControlRepository } = require('../dal/repositories');

module.exports = {
  sync: async function () {
    await ControlRepository.sync();
  },

  syncAlter: async function () {
    await ControlRepository.syncAlter();
  },

  syncForce: async function () {
    await ControlRepository.syncForce();
  },
};
