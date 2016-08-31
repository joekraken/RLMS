var express = require('express');
var router = express.Router();
var bparser = require('body-parser');
var DataAccess = require('../tools/mongoDataAccess.js');
router.use(bparser.json());

var testC = {
    topic: "C#",
    questions: [
        {
            id: "1",
            ques:"What is a jagged array in C#",
            ans:"An array of arrays",
            weight: 3,
            options:[
                {text:"An array that no one uses"},
                {text:"An array developed by Mike Jagger"},
                {text:"An array of arrays"},
                {text:"An array that can dynamically allocate more memory if needed"}
            ]
        },
        {
            id: "2",
            ques:"Can you force garbage collection in C#?",
            ans:"Kinda",
            weight: 2,
            options:[
                {text:"Not technically"},
                {text:"Kinda"},
                {text:"Yes"},
                {text:"Well, in Java you can't."}
            ]
        },
        {
            id: "3",
            ques: "Can you return multiple values from a function in C#?",
            ans: "True",
            weight: 1,
            options: [
                {text: "True"},
                {text: "False"}
            ]
        }
    ]
};
var testDB = {
    topic: "Database",
    questions: [
        {
            id: "1",
            ques:"What is sql injection?",
            ans:"Hackers doing stuff",
            weight: 5,
            options:[
                {text:"Hackers doing stuff"},
                {text:"Inserting data in sql"},
                {text:"Auto data manipulation from database"},
                {text:"I don't know sql"}
            ]
        },
        {
            id: "2",
            ques:"Difference between truncate and delete?",
            ans:"You can't rollback with truncate.",
            weight: 5,
            options:[
                {text:"The same"},
                {text:"Truncate sounds cool"},
                {text:"I like truncate"},
                {text:"You can't rollback with truncate."}
            ]
        },
        {
            id: "5",
            ques: "What is normalization?",
            ans: "Reduce duplicate data",
            weight: 1,
            options: [
                {text: "The process of becoming normal"},
                {text: "Reduce duplicate data"},
                {text: "3.5 is the best"},
                {text: "Matrix process to civilize the world."}
            ]
        }
    ]
};


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

// Request.post('http://localhost:3000/postForum').send(testC).end(function(err,res){
//     if(err){console.log(err)}
// });
// router.post('/postScore', function(req,res){
//     var da = new DataAccess();
//     da.addOrUpdateForums(req.body,(result)=>{
//         res.status(200);
//     res.json(result);
// });
// });

module.exports = router;