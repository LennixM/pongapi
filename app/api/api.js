var express = require('express');
var router = express.Router();
var model = require('../../models/index');
 
router.get('/getTudorsSexualPreferences', function(req, res) {
    res.json({message: "tudor likes men, what a faggot"})
})

router.get('/getUsers', function(req, res) {
    model.User.findAll().then(
        users => {
            res.json({users: users})
        }
    )
});

router.post('/newUser', function(req, res) {
    model.User.create(req).then(todo => model.User.findAll().then(
        users => {
            res.json({users: users})
        }
    ))
});
 
module.exports = router;