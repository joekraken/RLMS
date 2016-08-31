var express = require('express');
var router = express.Router();
var bparser = require('body-parser');
var DataAccess = require('../tools/mongoDataAccess.js');
router.use(bparser.json());


router.get('/getExam',function(req,res){
    var da = new DataAccess();
    da.getExams((result)=>{
        res.status(200);
        res.json(result);
    });
});

router.post('/postExam', function(req,res){
    var da = new DataAccess();
    da.addOrUpdateExams(req.body,(result)=>{
        res.status(200);
    res.json(result);
    });
});


module.exports = router;