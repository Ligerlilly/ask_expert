var express = require('express');
var router = express.Router();
var path = require('path');
var connectionString = process.env.DATABASE_URL || 'postgres://lono:monkeypoo0@localhost:5432/questions';
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
  console.log('ok');
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

router.put('/questions/:questionId', function(req, res) {
  var results = [];
  var id = req.params.questionId;
  var data = { text: req.body.text };
  pg.connect(connectionString, function(err, client, done) {
    client.query('UPDATE items SET text=($1) WHERE id=($2)', [data.text, id]);
    var query = client.query('SELECT * FROM queries ORDER BY id ASC;');
    query.on('row', function() {
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

router.delete('/questions/:questionId', function(req, res) {
  var results = [];
  var id = req.params.questionId;
  pg.connect(connectionString, function(err, client, done) {
    client.query('DELETE FROM queries WHERE id = ($1)', [id]);
    var query = client.query("SELECT * FROM queries ORDER BY id ASC;");

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


router.get('/questions/:questionId', function(req, res) {
  //console.log('hmm');
  var results = [];
  var id = req.params.questionId;
  pg.connect(connectionString, function(err, client, done) {
    var query = client.query("SELECT * FROM queries WHERE id = ($1);", [id]);

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
