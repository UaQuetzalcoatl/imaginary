'use strict';

var mongoose = require('mongoose');

module.exports = function (app) {
  app.get('/users', function (req, res) {
    mongoose.model('User').find({}, function (err, users) {
      if (err) {
        throw new Error(err);
      }

      res.json(users);
    });
  });

  app.get('/users/id/:id([0-9]+)', function (req, res) {
    mongoose.model('User').findById(req.params.id, function (err, user) {
      if (err) {
        throw new Error(err);
      }

      if (!user) {
        res.status(404).json({error: 'Not Found'});
      }

      res.json(user);
    });
  });

  app.get('/users/username/:username([a-z0-9]+)', function (req, res) {
    mongoose.model('User').findOne({username: req.params.username}, function (err, user) {
      if (err) {
        throw new Error(err);
      }

      if (!user) {
        res.status(404).json({error: 'Not Found'});
      }

      res.json(user);
    });
  });
};