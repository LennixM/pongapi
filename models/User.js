'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    facebook: DataTypes.STRING,
    snapchat: DataTypes.STRING,
    instagram: DataTypes.STRING,
    twitter: DataTypes.STRING,
    linkedin: DataTypes.STRING
  }, {});

  User.associate = function(models) {
  };

  return User;
};