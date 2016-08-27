/**
 * Created by Alex Redmon on 8/22/2016.
 */
var express = require('express'),
    path = require('path');
    app = express(),
    webpack = require('webpack'),
    configDir = path.resolve('config/webpack.config.js'),
    webpackDevMiddleware = require('webpack-dev-middleware'),
    webpackHotMiddleware = require('webpack-hot-middleware'),
    gutil = require('gulp-util'),
    webpackConfig =require(configDir);
    compiler=webpack(webpackConfig);
var mongDA = require('./tools/mongoDataAccess.js');
app.use(webpackDevMiddleware(compiler, {
    hot: true,
    filename: '[name].js',
    publicPath: '/JS',
    stats: {
        colors: true,
    },
    historyApiFallback: true,
}));

app.use(webpackHotMiddleware(compiler, {
    log: console.log,
    path: '/__webpack_hmr',
    heartbeat: 10 * 1000,
}));
app.use(express.static('app/public'));
app.get('/stuff',(req,res)=>{
  res.status(200);
  var x = {
    "Name":"Alex",
    "Occupation":"Basketweaver"
  }
  mongDA.AddPerson(x,(result)=>{

  })
  mongDA.GetPerson((result)=>{
    res.send(JSON.stringify(result));

  })
})
app.use(function(req,res){
    res.status(404);
    res.end("The requested document doesn't exist");
    gutil.log('[Express - info]','A 404 error was reached at ',gutil.colors.magenta(req.originalUrl));
})
try{

listen(3000);
}
catch(err)
{
  gutil.log('[Express - error]', guitil.colors.red('cannot bind to port'));
  process.exit();
}
function listen(port){
  app.listen(port);
  gutil.log('[Express -info]','Currently listening on port',gutil.colors.green(port));
}
