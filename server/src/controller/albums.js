'use strict';

var mongoose = require('mongoose');

module.exports = function (app) {
  app.post('/users/username/:username([a-z0-9]+)/albums', function (req, res) {
    /**
     * @todo add auth
     */
  });
};