'use strict';

module.exports = function (app) {
  app.get('/', function (req, res) {
    res.json({version: '1.0', status: 'ok'});
  });
};