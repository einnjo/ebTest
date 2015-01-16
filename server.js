var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

app.get('/', function(req, res){
    res.send('So it begins...');
});

app.listen(port)

console.log('Schoolhub backend listening on port: ' + port);
