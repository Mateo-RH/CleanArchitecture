module.exports = {
  POST: {
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
  PATCH: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
      },
    },
  },
};
