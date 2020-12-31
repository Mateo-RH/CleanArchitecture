module.exports = {
  CreateSchema: {
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
  UpdateSchema: {
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
  CreateMapper: function ({ name, phone, address }) {
    return { name, phone, address };
  },
  UpdateMapper: function ({ phone, address }) {
    return { phone, address };
  },
};
