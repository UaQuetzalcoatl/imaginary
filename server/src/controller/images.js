'use strict';

var mongoose = require('mongoose');

module.exports = function (app) {
  app.get('/album/:albumId/images', function (req, res) {
    mongoose.model('Image').find({albumId: req.params.albumId}, function (error, images) {
      if (error) {
        throw new Error(error);
      }

      res.json(images);
    });
  });
};