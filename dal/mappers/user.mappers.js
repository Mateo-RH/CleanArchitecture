const UserEntity = require('../../business/entities/user.entity');
const UserDao = require('../dao/user.dao');

module.exports = {
  MapToDomain: function (user) {
    return new UserEntity(user);
  },
  MapToDao: function (user) {
    return new UserDao(user);
  },
};
