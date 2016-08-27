var Db = require('mongodb').Db,
   MongoClient= require('mongodb').MongoClient,
   Server = require('mongodb').Server,
   ObjectID = require('mongodb').ObjectID;
var exports = module.exports = {};

//Connects to database, and spits out an array of person.
exports.GetUsers = (callback) =>{
  var result=[];
  initMe((db)=>{
    db.open((err,db)=>{
      var cursor = db.collection('User').find();
      cursor.each((err,doc)=>{
        if(doc){result.push(doc)}
        else{db.close(),callback(result)}
      });
    });
  });
}
exports.AddPerson = (person,callback) =>{
    var result =[];
    initMe((db)=>{
      db.open((err,db)=>{
        db.collection('person').updateOne({name:person.Name},{upsert:true},{$inc:{
          "Name": person.Name,
          "Occupation":person.Occupation
        }},(err,result)=>{
          if(!err)
          {
            db.close();
            callback(true);
          }else(console.log(err));

        });

      })
    })
}

function initMe(callback){
  callback(new Db('test',new Server('localhost',27017)));
}
