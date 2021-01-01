module.exports = {
  New: function ({ name, email }) {
    return { name, email, isDisabled: false };
  },
  Update: function ({ name }) {
    return { name };
  },
};
