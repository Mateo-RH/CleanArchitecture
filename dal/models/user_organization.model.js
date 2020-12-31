'use strict';

module.exports = function (sequelize, DataTypes) {
  const user_organization = sequelize.define(
    'user_organization',
    {
      user_id: DataTypes.INTEGER,
      organization_id: DataTypes.INTEGER,
      role: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      position: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { tableName: 'user_organization' }
  );

  user_organization.associate = function (models) {};

  return user_organization;
};
