'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('UserRelations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user1: {
        type: Sequelize.INTEGER,
      },
      user2: {
        type: Sequelize.INTEGER,
      },
      phone: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      facebook: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      instagram: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      twitter: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      snapchat: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      linkedin: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      bidirectional: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('UserRelations');
  }
};