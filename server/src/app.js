var express = require('express');
var app = express();

app.disable('x-powered-by');
app.get('/', function (req, res) {
  res.json({version: '1.0', status: 'ok'});
});

var server = app.listen(process.env.APP_PORT || 9090, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});