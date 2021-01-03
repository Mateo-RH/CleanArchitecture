const db = require('../models');
const UserRepository = require('../../business/interfaces/user.repository.interface');
const { MapToDao, MapToDomain } = require('../mappers/user.mappers');

UserRepository.create = async function (id) {
  const user = await db['user'].findByPk(id);
  return MapToDomain(user);
};

UserRepository.getAll = async function () {
  const users = await db['user'].findAll();
  return users.map(MapToDomain);
};

UserRepository.getOne = async function (id) {
  const user = await db['user'].findByPk(id);
  return MapToDomain(user);
};

UserRepository.update = function (id, user) {
  user = MapToDao(user);
  // Return number of updated rows
  db['user'].update(user, { where: { id } });
};

UserRepository.delete = function (id) {
  // Return number of deleted rows
  db['user'].destroy({ where: { id } });
};

module.exports = UserRepository;
