var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));

// Setting up Mongoose
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/angular-to-do-list');

app.get('/', function(req, res) {
  res.send('App is working!');
});

app.listen(3000);