/**
 * Created by Alex Redmon on 8/22/2016.
 */
var express = require('express'),
    app = express();

app.use(express.static('src/client/public'));
app.use(function(req,res){
    res.status(404);
    res.end("The requested document doesn't exist");
    console.log('404 was reached at' + req.originalUrl);
})
app.listen(3000);
console.log('listening');