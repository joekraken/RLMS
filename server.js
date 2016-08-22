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
    webpackConfig =require(configDir),
    compiler=webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {
    hot: true,
    filename: 'bundle.js',
    publicPath: '/',
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
app.use(express.static('src/client/public'));
app.use(function(req,res){
    res.status(404);
    res.end("The requested document doesn't exist");
    console.log('404 was reached at' + req.originalUrl);
})
app.listen(3000);
console.log('listening');