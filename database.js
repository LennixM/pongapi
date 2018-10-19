const Sequelize = require('sequelize');

const sequelize = new Sequelize('postgres://vvqvjmfhcoayyq:d0cf4087c61c8ab596ea690b4695b0f3e4daf164d052635477db919c6bae89f1@ec2-54-217-214-201.eu-west-1.compute.amazonaws.com:5432/ddokpkuthcpr68');

const User = sequelize.define('user', {
  username: Sequelize.STRING,
});

sequelize.sync();