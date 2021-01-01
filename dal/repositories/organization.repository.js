const BaseRepository = require('./base.repository');
const model = { model: 'organization' };

module.exports = {
  getOrganizations: BaseRepository.getAll.bind(model),
  getOrganization: BaseRepository.getByPk.bind(model),
  createOrganization: BaseRepository.create.bind(model),
  updateOrganization: BaseRepository.update.bind(model),
  deleteOrganization: BaseRepository.delete.bind(model),
};
