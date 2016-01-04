'use strict';

var
  mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  AlbumSchema = new Schema({
    title: {type: String, trim: true}
  }),
  UserSchema = new Schema({
    firstName: {type: String, trim: true},
    lastName: {type: String, trim: true},
    username: {type: String, lowercase: true, trim: true, unique: true, index: true},
    email: {type: String, lowercase: true, trim: true, unique: true, index: true},
    albums: [AlbumSchema],
    password: {type: String}
  });

mongoose.model('User', UserSchema);
