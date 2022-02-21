const express = require('express');
let mysql = require('mysql');

let connection = mysql.createConnection({
  database: 'p7',
  host: "localhost",
  user: "root",
  password: "@dmingp73"
})
connection.connect(function (err) {

  if (!err)
    console.log('Database is connected!');
  else
    console.log('Database not connected! : ' + JSON.stringify(err, undefined, 2));
});

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use('/posts',  (req, res, next) => {
  const data =  connection.query('SELECT * FROM posts', function(err, resDB, fields) {
    res.write(JSON.stringify(resDB))
  })
  
});

app.use((req, res, next) => {
  res.status(201);
  next();
});

app.use((req, res, next) => {
  res.json({ message: 'Votre requête a bien été reçue !' });
  next();
});

app.use((req, res, next) => {
  console.log('Réponse envoyée avec succès !');
});

module.exports = app;