
const express = require('express');
const app = express();
const db = require("./models");
const bodyParser = require('body-parser');
const api = require("./app/api/api");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api', router);

var port = process.env.PORT || 8080;

var router = express.Router();

api(app, db);


const sequelize = new Sequelize('postgres://vvqvjmfhcoayyq:d0cf4087c61c8ab596ea690b4695b0f3e4daf164d052635477db919c6bae89f1@ec2-54-217-214-201.eu-west-1.compute.amazonaws.com:5432/ddokpkuthcpr68');

db.sequelize.sync().then( () => {
  app.listen(port, () => 
    console.log("App listening on port 8080!")
  );
});