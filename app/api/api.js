var express = require('express');
var router = express.Router();
var model = require('../../models/index');

router.get('/getUsers', function(req, res) {
    model.User.findAll().then(
        users => {
            res.json({users: users})
        }
    )
});

router.get('/getUserById/:id', function(req, res) {
    model.User.findOne({
        where: {
            id: req.params.id
        }
    }).then(user => res.json({user: user}))
})

router.get('/getUserRelations', function(req, res) {
    model.UserRelation.findAll().then(
        users => {
            res.json({users: users})
        }
    )
});

router.post('/updateUserById/:id', function(req, res) {
  model.User.update(
    req.body,
    { where: { id: req.params.id } }
  )
})

router.post('/newUser', function(req, res) {
    model.User.create(req.body).then(user => model.User.findOne({
        where: {
            id: user.id
        }
    }).then(user => res.json(user)))});

router.get('/getFriends/:id', function(req, res) {
    model.UserRelation.findAll({
        where : {
            user1: req.params.id
        }
    }).then(friends => res.json({friends: friends}))
})

router.post('/newUserRelation', function(req, res) {
    bidirectional = req.body.bidirectional
    delete req.body["bidirectional"]
    if (bidirectional === true) {
        model.UserRelation.create(req.body)
        var json = req.body
        var temp1 = json.user1
        json.user1 = json.user2
        json.user2 = temp1
        model.UserRelation.create(json)
    }
    else {
        model.UserRelation.create(req.body)
    }
})
 
module.exports = router;