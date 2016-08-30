var express = require('express');
var passport = require('passport');
var app = express.Router();
var parser = require('body-parser');

var secure = require('./init.js');
app.use('/', secure);
app.use(parser.urlencoded({extended:false}));

app.get('/failLogin', function(req, res){
  res.redirect('../tempFail');
});

app.get('/profile', function(req, res){
  res.redirect('../Success');
});

app.post('/login', passport.authenticate('local', {
  successRedirect: '/api/profile',
  failureRedirect: '/api/fail'
}));

module.exports = app;