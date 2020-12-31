'use strict';

module.exports = function (sequelize, DataTypes) {
  const organization = sequelize.define(
    'organization',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    { tableName: 'organization', timestamps: false }
  );

  organization.associate = function (models) {
    organization.belongsToMany(
      models.user,
      {
        through: 'user_organization',
        as: 'user',
        foreignKey: 'organization_id',
      },
      { onDelete: 'cascade' }
    );
  };

  return organization;
};
