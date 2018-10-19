import User from database

var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

var router = express.Router();

router.get('/getTudorsSexualPreferences', function(req, res) {
  res.json({message: "tudor likes men, what a faggot"})
})

router.get('/getFriends', function(req, res) {
    var users = User.findById()
});

router.get('/newUser', function(req, res) {
    User.create("Tudor")
    res.send("Added")
});

app.use('/api', router);

app.listen(port);
console.log('Magic happens on port ' + port);
