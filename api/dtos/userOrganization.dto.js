module.exports = function ({ role, position }) {
  return { role: role.split(','), position };
};
