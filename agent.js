'use strict';

const rabbit = require('./lib/rabbit');

module.exports = agent => {
/**
 * Whether in plugins, frameworks or even in the application, the agent.js is always loaded before app.js
 * So Egg-rabbit needs to determine whether the rabbit instance is mounted on the agent or app.js in agent.js
 */

  if (!(agent.config.rabbit.agent && agent.config.rabbit.app)) {
    agent.logger.info("[egg-rabbit] agent and app can't be false at the same time on egg-rabbit's config , please modify config");
    return;
  }

  if (agent.config.rabbit.agent) {
    rabbit(agent);
  }
};
