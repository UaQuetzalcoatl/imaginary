'use strict';

var
  mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  AlbumSchema = new Schema({
    title: {type: String, trim: true, required: true}
  }),
  UserSchema = new Schema({
    firstName: {type: String, trim: true, required: true},
    lastName: {type: String, trim: true, required: true},
    username: {type: String, lowercase: true, trim: true, unique: true, index: true, required: true},
    email: {type: String, lowercase: true, trim: true, unique: true, index: true, required: true},
    albums: [AlbumSchema],
    password: {type: String, required: true}
  });

mongoose.model('User', UserSchema);
