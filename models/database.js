//process.env.DATABASE_URL ||
var pg = require('pg');
var connectionString =  'postgres://localhost:5432/questions';
var client = new pg.Client(connectionString);
client.connect();
var query = client.query('CREATE TABLE queries(id SERIAL PRIMARY KEY, text TEXT NOT NULL)');
query = client.query('CREATE TABLE replies(id SERIAL PRIMARY KEY, text TEXT NOT NULL)');
query = client.query("INSERT INTO queries (text) VALUES ('hi');");
query.on('end', function() { client.end(); });
