var express = require('express');
var router = express.Router();
var path = require('path');
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/questions';
var pg = require('pg');

router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../views', 'index.html'));
});

router.post('/answers', function(req, res) {
  var results = [];
  var data = { text: req.body.text, question_id: req.body.question_id };
  pg.connect(connectionString, function(err, client, done) {
    client.query('INSERT INTO replies (text, query_id) VALUES ($1, $2)', [data.text, data.question_id]);

    var query = client.query('SELECT * FROM replies ORDER BY id ASC');

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

router.get('/answers', function(req, res) {
  var results = [];
  pg.connect(connectionString, function(err, client, done) {
    var query = client.query('SELECT * FROM replies ORDER BY id ASC;');

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

router.delete('/questions/:questionId/answers/:answerId', function(req, res) {
  var results = [];
  var id = req.params.answerId;
  var questionId = req.params.questionId
  pg.connect(connectionString, function(err, client, done) {
    client.query('DELETE FROM replies WHERE id = ($1)', [id]);
    var query = client.query("SELECT * FROM replies WHERE query_id = ($1) ORDER BY id ASC;", [questionId]);

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

router.put('/questions/:questionId/answers/:answerId', function(req, res) {
  var results = [];
  var id = req.params.answerId;
  var questionId = req.params.questionId;
  var data = { text: req.body.text };
  console.log(data.text);
  pg.connect(connectionString, function(err, client, done) {
    client.query('UPDATE replies SET text=($1) WHERE id=($2)', [data.text, id]);
    var query = client.query('SELECT * FROM replies WHERE query_id = ($1) ORDER BY id ASC;', [questionId]);
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

router.put('/questions/:questionId', function(req, res) {
  var results = [];
  var id = req.params.questionId;
  var data = { text: req.body.text };
  console.log(data.text);
  pg.connect(connectionString, function(err, client, done) {
    client.query('UPDATE queries SET text=($1) WHERE id=($2)', [data.text, id]);
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
