'use strict';

var mongoose = require('mongoose');

module.exports = app => {
  app.get('/album/:albumId/images', (req, res) => {
    mongoose.model('Image').find({albumId: req.params.albumId}, (error, images) => {
      if (error) {
        throw new Error(error);
      }

      res.json(images);
    });
  });
};