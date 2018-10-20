module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define('user', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: DataTypes.STRING,
        phone: DataTypes.STRING,
        snapchat: DataTypes.STRING,
        facebook: DataTypes.STRING,
        instagram: DataTypes.STRING,
        linkedIn: DataTypes.STRING,
        twitter: DataTypes.STRING,
    });
  
    User.associate = (models) => {
        User.hasMany(models.userRelation);
    };

    return User;
  }