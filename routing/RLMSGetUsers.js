var express = require("express");
var router = express.Router();
var mongo = require('../tools/mongoDataAccess.js');
router.get('/getUser/:username', function(req, res){
    res.status(200);
    var da = new mongo();
    da.getUsers(req.params.username, function(result){
        res.json(result);
    })
});

module.exports = router;