module.exports = {
  CreateSchema: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
      },
      email: {
        type: 'string',
      },
    },
    required: ['name', 'email'],
  },
  CreateMapper: function ({ name, email }) {
    return { name, email, isDisabled: false };
  },
};
