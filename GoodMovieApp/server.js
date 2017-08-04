var express = require('express');
var path = require('path');
var router = express.Router();
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


var app = express();

app.use(express.static(path.join(__dirname, 'dist')));               
app.use(bodyParser.urlencoded({'extended':'true'}));         
app.use(bodyParser.json());                                  
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// app.get('/', function(req, res, next) {
// res.status(200).sendFile(path.join(__dirname+'/index.html')); 
// });

app.listen(3000, function () {
  console.log('App listening on port 3000!')
})

module.exports = app;