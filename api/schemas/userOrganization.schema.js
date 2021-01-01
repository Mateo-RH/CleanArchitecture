module.exports = {
  POST: {
    type: 'object',
    properties: {
      user_id: {
        type: 'integer',
      },
      organization_id: {
        type: 'integer',
      },
      role: {
        type: 'array',
        items: {
          type: 'string',
          enum: ['admin', 'supervisor'],
        },
        uniqueItems: true,
        minItems: 1,
      },
      position: {
        type: 'string',
      },
    },
    required: ['user_id', 'organization_id', 'role', 'position'],
  },
  PATCH: {
    type: 'object',
    properties: {
      role: {
        type: 'array',
        items: {
          type: 'string',
          enum: ['admin', 'supervisor'],
        },
        uniqueItems: true,
        minItems: 1,
      },
      position: {
        type: 'string',
      },
    },
  },
};
