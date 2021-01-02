class UserDao {
  constructor({ name, email, isDisabled }) {
    this.name = name;
    this.email = email;
    this.isDisabled = isDisabled;
  }
}

module.exports = UserDao;
