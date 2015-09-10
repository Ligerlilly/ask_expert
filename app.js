var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var routes = require('./routes/index');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname + '/public'));

app.use('/', routes);

app.listen(3000, function() {
  console.log('listening on port 3000');
});

module.exports = app;
