const db = require('../models');

module.exports = {
  sync: async function () {
    await db.sequelize.sync();
  },

  syncAlter: async function () {
    await db.sequelize.sync({ alter: true });
  },

  syncForce: async function () {
    await db.sequelize.sync({ force: true });
  },
};
