'use strict';

module.exports = function defaultRoute(req, res) {
  res.json({version: '1.0', status: 'ok'});
};