module.exports = {
  POST: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
      },
      phone: {
        type: 'string',
      },
      address: {
        type: 'string',
      },
    },
    required: ['name'],
  },
  PATCH: {
    type: 'object',
    properties: {
      phone: {
        type: 'string',
      },
      address: {
        type: 'string',
      },
    },
  },
};
