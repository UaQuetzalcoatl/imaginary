'use strict';

var
  cors = require('cors'),
  bodyParser = require('body-parser'),
  glob = require('glob');

module.exports = function (app) {
  var
    controllers,
    models;

  app.disable('x-powered-by');
  /**
   * @todo move cors to nginx proxy
   */
  app.use(cors()); // enable CORS
  app.use(bodyParser.json()); // for parsing application/json
  app.use(bodyParser.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded

  /**
   * load models
   */
  models = glob.sync('../model/*.js');
  models.forEach(function (model) {
    require(model);
  });

  /**
   * load controllers
   */
  controllers = glob.sync('../controller/*.js');
  controllers.forEach(function (controller) {
    require(controller)(app);
  });
};