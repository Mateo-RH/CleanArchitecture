class UserEntity {
  constructor({ id, name, email, isDisabled }) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.isDisabled = isDisabled;
  }
}

module.exports = UserEntity;
