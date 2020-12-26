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
      lastname: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    { tableName: 'user', timestamps: false }
  );

  user.associate = function (models) {};

  return user;
};
