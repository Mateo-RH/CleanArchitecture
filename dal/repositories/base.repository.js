const db = require('../models');

module.exports = {
  getAll() {
    return db[this.model].findAll();
  },

  getByPk(id) {
    return db[this.model].findByPk(id);
  },

  create(entity) {
    return db[this.model].create(entity);
  },

  update(id, entity) {
    return db[this.model].update(entity, { where: { id } });
  },

  delete(id) {
    return db[this.model].destroy({ where: { id } });
  },
};
