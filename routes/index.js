var express = require('express');
var router = express.Router();
var path = require('path');
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/questions';
var pg = require('pg');

router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../views', 'index.html'));
});

router.post('/questions', function(req, res) {
  var results = [];

  var data = { text: req.body.text };

  pg.connect(connectionString, function(err, client, done) {
    client.query('INSERT INTO queries (text) VALUES ($1)', [data.text]);

    var query = client.query('SELECT * FROM queries ORDER BY id ASC');

    query.on('row', function(row) {
      results.push(row);
    });

    query.on('end', function() {
      client.end();
      return res.json(results);
    });

    if(err){
      console.log(err);
    }
  });
});

router.get('/questions', function(req, res) {
  var results = [];

  pg.connect(connectionString, function(err, client, done) {
    var query = client.query('SELECT * FROM queries ORDER BY id ASC;');

    query.on('row', function(row) {
      results.push(row);
    });

    query.on('end', function() {
      client.end();
      return res.json(results);
    });

    if (err) {
      console.log(err);
    }
  });
});



module.exports = router;
