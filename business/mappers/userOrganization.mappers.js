module.exports = {
  New: function ({ user_id, organization_id, role, position }) {
    return { user_id, organization_id, role: role.join(','), position };
  },
  Update: function ({ role, position }) {
    return { role: role && role.join(','), position };
  },
};
