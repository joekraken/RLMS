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
                var cursor;
                if(!username)
                {
                    cursor = db.collection('user').find();

                }else{
                    cursor = db.collection('user').find({username:username});
                }
                var result=[];
                cursor.each((err,doc)=>{
                    if(doc){
                        result.push(doc);
                    }else{callback(result)}
                })
            }else{
                console.log(err);
            }
    });
};
// as stated, this allows for users to be added or updated.
//passes the result into a callback
DataAccess.prototype.addOrUpdateUser=(user,callback)=>{
    var client = DataAccess.prototype.MongoClient;
    var url = DataAccess.prototype.url;
    var other =[];
    // attempt to get the user. If the use exists, make it fail.
    DataAccess.prototype.getUsers(user.username,(result)=>{

        if(result != []){
            console.log(result);
            user._id = result[0]._id;

    }
        if(user)
        {

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
    var cursor;
    client.connect(url,(err,db)=>{
        if(batchName)
        {
            cursor = db.collection('forum').find({batchName:batchName})
        }else{
            cursor = db.collection('forum').find();
        }
        var result = [];
        cusor.each((err,doc)=>{
            if(doc){
                result.push(doc);
            }else{
                callback(result);
            }
        })
    });


};
DataAccess.prototype.addOrUpdateForums=(forum,callback)=>{
    var client = DataAccess.prototype.MongoClient;
    var url = DataAccess.prototype.url;
    var newForm = {
      batchName:forum.batchName,
      description:forum.description,
      posts:forum.posts,
    };
    if(form){
        DataAccess.prototype.getForums(newForm.batchName,(result)=>{
            if(result)
            {
                newForm._id = result[0]._id;
            }else{
                client.open(url,(err,db)=>{
                    db.collection('forum').save(newForm,(err)=>{

                        if(!err){
                            console.log('Entry successfully added to the database');
                            callback('Entry successfully added');
                        }

                    })
                })
            }
        })
    }else{
        console.log('cannot insert a null value into the database');
    }
 };
DataAccess.prototype.getLessons=(lessonName,callback)=>{
    var client = DataAccess.prototype.MongoClient;
    var url = DataAccess.prototype.url;
    var cursor;
    client.open((err,db)=>{
        if(lessonName) {
            cursor = db.collection('lesson').find({lessonName:lessonName});
        }else{
            cursor = db.collection('lesson').find();
        }
        var result=[];
        cursor.each((err,doc)=>{
            if(doc){result.push(doc)}
            else{ db.close(); callback(result);}
        })
    })
};
DataAccess.prototype.addOrUpdateLessons=(lesson,callback)=>{
    var client = DataAccess.prototype.MongoClient;
    var url = DataAccess.prototype.url;
    client.open((err,db)=>{
        DataAccess.prototype.getLessons(lesson.batchName,(result)=>{
            if(result){
                lesson._id = result[0]._id;
            }
            var newLesson = {
                _id:lesson._id,
                curriculum:lesson.curriculum,
                title:lesson.title,
                week:lesson.week,
                topic:lesson.topic
            };
            db.collection('lesson').save(newLesson,(err)=>{
               if(err){console.log(err)}
               else{callback('Success')}
            });

        })
    })


};
DataAccess.prototype.getExams=(exam,callback)=>{
    var client = DataAccess.prototype.MongoClient;
    var  url = DataAccess.prototype.url;
    client.open(url,(err,db)=>{
        var result =[];
        var cursor =db.collection('exams').find();
        cursor.each((err,doc)=>{
            if(doc){
                result.push(doc);
            }else{callback(result)}
        })

    })
};
DataAccess.prototype.addOrUpdateExams=(exam, callback)=>{
    var client = DataAccess.prototype.MongoClient;
    var  url = DataAccess.prototype.url;
    client.connect((err,db)=>{
        db.collection('exams').save(exam,(err)=>{
            if(!err){callback('success')}
        })
    })
};

