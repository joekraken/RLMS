var exports = module.exports = DataAccess;

function DataAccess()
{
    DataAccess.prototype.MongoClient =  require('mongodb').MongoClient;
    DataAccess.prototype.url= 'mongodb://rlms:rlmsreact@ds017636.mlab.com:17636/rlms';
}
// username can be null, but you need to pass in null.
// if username is null, all users are returned.
DataAccess.prototype.getUsers =(username,callback)=>{

    var url = DataAccess.prototype.url;
    DataAccess.prototype.MongoClient.connect(url,(err,db)=> {
            if(!err)
            {
                if(err){console.log(err)}
                if(!username)
                {
                    console.log('No user was defined');
                    var cursor =db.collection('user').find();
                    var result = [];
                    cursor.each((err,doc)=>{
                        if(doc){
                            result.push(doc);
                        }else{
                            //if there isn't any more results, close the connection and then return the results;
                            db.close();
                            callback(result)}
                    })
                }else{

                    var cursor = db.collection('user').find({username:username});
                    var result = [];
                    cursor.each((err,doc)=>{
                        if(doc){result.push(doc)}
                        else{callback(result[0])}
                    })
                }
            }else{
                console.log(err);
            }
    });
};
// as stated, this allows for users to be added or updated.
DataAccess.prototype.addOrUpdateUser=(user,callback)=>{
    var client = DataAccess.prototype.MongoClient;
    var url = DataAccess.prototype.url;
    var other =[];
    // attempt to get the user. If the use exists, make it fail.
    DataAccess.prototype.getUsers(user.username,(result)=>{
        if(user && !result)
        {
            // ceraete the structure for the inserted datea
            var newUser = {
                username: user.username,
                _id : user._id,
                id:user.id,
                is_Admin:user.is_Admin,
                f_name:user.f_name,
                l_name:user.l_name,
                email:user.email,
                batch:user.batch
            };
            client.connect(url,(err,db)=>{
                db.collection('user').save(newUser,(err)=>{
                    if(err){callback('error')}
                    else {callback('success')}
                })
            })
        }else{callback('fail')}
    });




};
DataAccess.prototype.getForums=(batchName,callback)=>{//todo
    var client = DataAccess.prototype.MongoClient;
    var url = DataAccess.prototype.url;
    if(forumName)
    {
            client.connect(url,(err,db)=>{
                var cursor = db.collection('forum').find();
                var result =[];
                cursor.each((err,doc)=>{
                    if(doc){result.push(doc)}
                    else{db.close(); callback(result);}
                });
        });
    }else{
        client.connect(url,(err,db)=>{
            var cursor = db.collection('forum').find({batchName:batchName});
            var result =[];
            cursor.each((err,doc)=>{
                if(doc){result.push(doc)}
                else{db.close(); callback(result);}
            });
        }
};
DataAccess.prototype.addOrUpdateForums=()=>{//todo
 };
DataAccess.prototype.getLessons=()=>{//todo
};
DataAccess.prototype.addOrUpdateLessons=()=>{//todo
};
DataAccess.prototype.getExams=()=>{//todo
};
DataAccess.prototype.addOrUpdateExams=()=>{//todo
};


// var exports = module.exports = {
//
//     DataAccess: ()=>{
//         var Db = require('mongodb').Db,
//             MongoClient= require('mongodb').MongoClient,
//             Server = require('mongodb').Server,
//             ObjectID = require('mongodb').ObjectID;
//         var db = new Db('test',new Server('localhost',27017));
//          this.getUser = (user,callback)=>{
//             db.open((err,db)=>{
//                 if(user){}
//                 else{
//                    var cursor= db.collection('user').find();
//                     var result=[];
//                     cursor.each((err,doc)=>{
//                         if(doc){result.push(doc)}else{callback(result)}
//                     });
//                 }
//             });
//         }
//
//
//     }
//
// };
// module.exports = exports;
//
//
//
//
//
//
// //Connects to database, and spits out an array of person.
// // exports.GetUsers = (username,callback) => {
// //     var result = [];
// //     initMe((db)=> {
// //         db.open((err, db)=> {
// //         if(username){
// //             var result = [];
// //             var cursor = db.collection('user').find({"username":username});
// //             cursor.each((err,doc)=>{
// //                 if(doc){
// //                     result.push(doc);
// //                 }else{callback(result)}
// //             });
// //
// //         }else{
// //            var result=[];
// //            var cursor = db.collection('user').find();
// //             cursor.each((err,doc)=>{
// //                 if(doc){
// //                     result.push(doc);
// //                 }else{callback(result)}
// //             })
// //         }
// //         });
// //     });
// //     exports.AddPerson = (person, callback) => {
// //         var result = [];
// //         initMe((db)=> {
// //             db.open((err, db)=> {
// //                 db.collection('person').updateOne({name: person.Name}, {upsert: true}, {
// //                     $inc: {
// //                         "Name": person.Name,
// //                         "Occupation": person.Occupation
// //                     }
// //                 }, (err, result)=> {
// //                     if (!err) {
// //                         db.close();
// //                         callback(true);
// //                     } else(console.log(err));
// //
// //                 });
// //
// //             })
// //         })
// //     };
// // };
// // exports.AddOrUpdateUser= (username,callback)=>{
// //   initMe((db)=>{
// //       var oldUser;
// //       var
// //       exports.GetUsers(username,(data)=>{oldUser = data});
// //
// //   })
// // };
// //
// // function initMe(callback){
// //   callback(new Db('test',new Server('localhost',27017)));
// // }
