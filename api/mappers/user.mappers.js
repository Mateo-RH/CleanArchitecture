const UserEntity = require('../../business/entities/user.entity');
const UserDto = require('../dtos/user.dto');

module.exports = {
  MapToDomain: function (user) {
    return new UserEntity(user);
  },
  MapToDto: function (user) {
    return new UserDto(user);
  },
};
