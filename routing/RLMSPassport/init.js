var express = require('express');
var app = express.Router();
var passport = require('passport');
var localStrategy = require('passport-local').Strategy;
var session = require('express-session');

var user = [
  {
      "ID": 0,
      "username": "dev",
      "password": "123",
      "admin": 1
    },
    {
      "ID": 1,
      "username": "guy",
      "password": "123",
      "admin": 0
    },
    {
      "ID": 2,
      "username": "gal",
      "password": "123",
      "admin": 0
    }
];

app.use(session({secret:'itsASecretToEveyone'}));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, cb){
  cb(null, user.ID);
});

passport.deserializeUser(function(id, cb){
  findUserByID(id, cb);
});

function findUser(name, callback){
  for(var i = 0; i < user.length; i++){
    if(user[i].username == name){
      return callback(null, user[i]);
    }
  }
  return callback(null, false);
}

function findUserByID(id, callback){
  for(var i = 0; i < user.length; i++){
    if(user[i].ID == id){
      return callback(null, user[i]);
    }
  }
  return callback(null, false);
}

passport.use(new localStrategy({
  usernameField: 'username',
  passwordField: 'password'
}, function(username, password, done){
  findUser(username, function(err, user){
    if(err){
      return done(err);
    }
    if(!user){
      return done(null, false);
    }
    if(password !== user.password){
      return done(null,  false);
    }
    
    return done(null, user);
  });
}));

module.exports = app;