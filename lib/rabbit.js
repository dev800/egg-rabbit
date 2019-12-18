'use strict';
/**
 * @description load rabbit connection for a client ,add into app context for egg plugin
 * @author Taylor
 * @time 2019-12-12
 */
const assert = require('assert');
const amqplib = require('amqplib');

module.exports = app => {
  // judge one client or more clients
  if (app.config.rabbit.client && app.config.rabbit.clients) {
    return app.coreLogger.info('[egg-rabbit] egg:singleton rabbit can not set options.client and options.clients both');
  }
  // create a singleton mode
  app.addSingleton('rabbit', createRabbitMQConnection);

};
/**
 * @description Use the singleton pattern to create one or more RabbitMQ message queue examples and
 *              hang them on app.js or agent.js to the Egg project
 * @param {Object} config   singleton latest config
 * @param {Context} app     context object for egg-project app
 */
async function createRabbitMQConnection(config, app) {
  assert(config.url || config.rabbit, "[egg-rabbit] url and rabbit config params can't be empty at the same time on config");

  const rabbitConnectOptions = config.url || getConfigParseOptions(config.rabbit);
  app.coreLogger.info(`[egg-rabbit] last connection config params on ${JSON.stringify(rabbitConnectOptions)}`);

  try {
    const client = await amqplib.connect(rabbitConnectOptions, config.socketOptions);

    app.coreLogger.info('[egg-rabbit] use egg-rabbit plugin to connect rabbitMQ successfully');

    return client;
  } catch (e) {
    app.coreLogger.info('[egg-rabbit] using egg-rabbit plugin to connect rabbitMQ append to an issue ');
  }

}
/**
 * @description copy config from user as sourceObject to targetObject , get latest config from egg-project and egg-plugin
 * @param {Object} connectOptions
 * @return {}
 */

function getConfigParseOptions(connectOptions) {
  return Object.assign(
    // rabbitMQ default config ,for example (username,password) to ('guest','guest')
    {
      protocol: 'amqp',
      hostname: 'localhost',
      port: 5672,
      username: 'guest',
      password: 'guest',
      locale: 'en_US',
      frameMax: 0,
      heartbeat: 0,
      vhost: '/',
    }, connectOptions);
}
