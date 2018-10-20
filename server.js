
const express = require('express');
const app = express();
const db = require("./models");
const bodyParser = require('body-parser');
const api = require("./app/api/api");

var port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api', api);

db.sequelize.sync().then( () => {
  app.listen(port, () => 
    console.log("App listening on port 8080!")
  );
});