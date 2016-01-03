'use strict';

var
    mongoose = require('mongoose'),
    Schema = mongoose.Schema ,
    user = new Schema({
        firstName: {type: String, trim: true},
        lastName: {type: String, trim: true},
        email: {type: String, lowercase: true, trim: true},
        //albums: [{title: String, }],
        created: { type: Date, default: Date.now },
        updated: { type: Date, default: Date.now }
    });

module.exports = user;
