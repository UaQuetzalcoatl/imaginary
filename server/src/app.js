'use strict';

var
  express = require('express'),
  app = express(),
  mongoose = require('mongoose'),
  config = require('./config/config'),
  db;

mongoose.connect(config.mongo);
db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

require('./config/express')(app);

var server = app.listen(process.env.APP_PORT || 9090, function () {
  console.log('Example app listening at http://%s:%s', server.address().address, server.address().port);
});