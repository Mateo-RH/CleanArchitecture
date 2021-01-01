const BaseRepository = require('./base.repository');
const model = { model: 'user' };

module.exports = {
  getUsers: BaseRepository.getAll.bind(model),
  getUser: BaseRepository.getByPk.bind(model),
  createUser: BaseRepository.create.bind(model),
  updateUser: BaseRepository.update.bind(model),
  deleteUser: BaseRepository.delete.bind(model),
};
