'use strict';

var mongoose = require('mongoose');

module.exports = (app) => {
  app.get('/users', (req, res) => {
    mongoose.model('User').find({}, (err, users) => {
      if (err) {
        throw new Error(err);
      }

      res.json(users);
    });
  });

  app.get('/users/id/:id', (req, res) => {
    mongoose.model('User').findById(req.params.id, (err, user) => {
      if (err || !user) {
        return res.status(404).json({error: 'Not Found'});
      }

      res.json(user);
    });
  });

  app.get('/users/username/:username', (req, res) => {
    mongoose.model('User').findOne({username: req.params.username}, (err, user) => {
      if (err || !user) {
        return res.status(404).json({error: 'Not Found'});
      }

      res.json(user);
    });
  });
};