'use strict';

module.exports = function (sequelize, DataTypes) {
  const user = sequelize.define(
    'user',
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
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      isDisabled: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    { tableName: 'user', timestamps: false }
  );

  user.associate = function (models) {
    user.belongsToMany(
      models.organization,
      {
        through: 'user_organization',
        as: 'organization',
        foreignKey: 'user_id',
      },
      { onDelete: 'cascade' }
    );
  };

  return user;
};
