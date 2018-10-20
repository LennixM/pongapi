module.exports = (app, db) => {
    router.get('/getTudorsSexualPreferences', function(req, res) {
        res.json({message: "tudor likes men, what a faggot"})
    })
    
    router.get('/getFriends', function(req, res) {
        var users = db.user.findAll()
        req.send(users)
    });
    
    router.get('/newUser', function(req, res) {
        db.user.create("Tudor")
        res.send("Added")
    });
}