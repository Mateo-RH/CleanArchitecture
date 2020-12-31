module.exports = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
    },
    lastname: {
      type: 'string',
    },
  },
  required: ['name', 'lastname'],
};
