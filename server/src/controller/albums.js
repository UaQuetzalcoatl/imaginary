'use strict';

var mongoose = require('mongoose');

module.exports = app => {
  app.post('/users/username/:username([a-z0-9]+)/albums', (req, res) => {
    /**
     * @todo add auth
     */
    res.send({info: 'post user'});
  });
};