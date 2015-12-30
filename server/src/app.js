'use strict';

var
  express = require('express'),
  app = express(),
  cors = require('cors'),
  bodyParser = require('body-parser');

app.disable('x-powered-by');
/**
 * @todo move cors to nginx proxy
 */
app.use(cors()); // enable CORS
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded
app.get('/', require('./route/default'));

var server = app.listen(process.env.APP_PORT || 9090, function () {
  console.log('Example app listening at http://%s:%s', server.address().address, server.address().port);
});