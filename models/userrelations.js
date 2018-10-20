'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserRelation = sequelize.define('UserRelation', {
    user1: DataTypes.INTEGER,
    user2: DataTypes.INTEGER,
    phone: DataTypes.BOOLEAN,
    facebook: DataTypes.BOOLEAN,
    instagram: DataTypes.BOOLEAN,
    twitter: DataTypes.BOOLEAN,
    snapchat: DataTypes.BOOLEAN,
    linkedin: DataTypes.BOOLEAN
  }, {});

  UserRelation.associate = function(models) {
  };
  
  return UserRelation;
};