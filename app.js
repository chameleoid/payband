'use strict';

var express = require('express');
var app = express();
var schema = require('./schema');

app.use(require('morgan')('dev'));

app.use(express.static(__dirname + '/app'));

app.get('*', function(req, res) {
  res.sendFile('index.html', {
    root: __dirname + '/app/html',
  });
});

app.listen(process.env.PORT);
