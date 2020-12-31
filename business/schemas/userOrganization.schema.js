module.exports = {
  CreateSchema: {
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
  UpdateSchema: {
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
  CreateMapper: function ({ user_id, organization_id, role, position }) {
    return { user_id, organization_id, role: role.join(','), position };
  },
  UpdateMapper: function ({ role, position }) {
    return { role: role && role.join(','), position };
  },
};
