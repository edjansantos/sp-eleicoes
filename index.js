var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var compression = require('compression');
//var apis = require('./api/api.js');

var app = express();

app.use(compression());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var staticPath = path.resolve(__dirname+'/app');
console.log(staticPath);
app.use(express.static(staticPath));

//apis.start(app);

app.get('/*', function(req, res) { 
  res.sendFile(__dirname + '/app/index.html')
});

app.listen(process.env.PORT || 8080, function() {
  console.log('sp eleições rodando');
});