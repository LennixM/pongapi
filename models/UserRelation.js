module.exports = (sequelize, DataTypes) => {

    const UserRelation = sequelize.define('userRelation', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        user1: DataTypes.STRING,
        user2: DataTypes.STRING,
        phone: DataTypes.BOOLEAN,
        snapchat: DataTypes.BOOLEAN,
        facebook: DataTypes.BOOLEAN,
        instagram: DataTypes.BOOLEAN,
        linkedIn: DataTypes.BOOLEAN,
        twitter: DataTypes.BOOLEAN,
    });


    return UserRelation;
  }