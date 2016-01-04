'use strict';

var
  mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  ImageSchema = new Schema({
    albumId: {type: Schema.Types.ObjectId, index: true},
    filename: {type: String},
    ext: {type: String},
    path: {type: String},
    mime: {type: String},
    width: {type: Number},
    height: {type: Number},
    size: {type: Number} //bytes
  });

mongoose.model('Image', ImageSchema);