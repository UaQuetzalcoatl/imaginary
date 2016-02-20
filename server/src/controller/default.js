'use strict';

module.exports = app => {
  app.get('/', (req, res) => {
    res.json({version: '1.0', status: 'ok'});
  });
};