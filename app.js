'use strict';

const rabbit = require('./lib/rabbit');

module.exports = app => {
  if (app.config.rabbit.app) {
    rabbit(app);
  }
  /**
 * Whether in plugins, frameworks or even in the application, the agent.js is always loaded before app.js
 * So Egg-rabbit can  determine which one the final rabbit instance is mounted on the agent or app.js in agent.js
 */
  if (app.config.rabbit.app && app.config.rabbit.agent) {
    app.logger.info('[egg-rabbit] Rabbit instances have been mounted on app.js and agent.js, so you can program as much as you like');
  } else {
    if (app.config.rabbit.agent) {
      app.logger.info('[egg-rabbit] Rabbit instances have been mounted on agent.js, so you can program as much as you like');
    }
    if (app.config.rabbit.app) {
      app.logger.info('[egg-rabbit] Rabbit instances have been mounted on app.js , so you can program as much as you like');
    }
  }


};
