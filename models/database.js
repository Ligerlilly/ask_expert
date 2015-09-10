var pg = require('pg');
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/questions';
var client = new pg.Client(connectionString);
client.connect();
var query = client.query('CREATE TABLE queries(id SERIAL PRIMARY KEY, text TEXT NOT NULL)');
query.on('end', function() { client.end() });
