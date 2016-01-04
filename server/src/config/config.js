'use strict';

var path = require('path'),
  rootPath = path.normalize(__dirname + '/..');

module.exports = {
  root: rootPath,
  mongo: process.env.MONGO || 'mongodb://localhost::27017/imaginary'
};