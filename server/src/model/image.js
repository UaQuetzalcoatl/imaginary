'use strict';

var
  mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  ImageSchema = new Schema({
    albumId: {type: Schema.Types.ObjectId, index: true, required: true},
    filename: {type: String, required: true},
    ext: {type: String},
    path: {type: String, required: true},
    mime: {type: String, required: true},
    width: {type: Number, required: true},
    height: {type: Number, required: true},
    size: {type: Number, required: true} //bytes
  });

mongoose.model('Image', ImageSchema);