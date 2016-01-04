'use strict';

var
  express = require('express'),
  app = express();

require('./config/express')(app);

var server = app.listen(process.env.APP_PORT || 9090, function () {
  console.log('Example app listening at http://%s:%s', server.address().address, server.address().port);
});