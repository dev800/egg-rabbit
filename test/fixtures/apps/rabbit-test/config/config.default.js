'use strict';

/**
 * egg-rabbit default config for unit test
 * @member Config  #rabbit
 * @property {String} SOME_KEY - some description
 */
exports.keys = 'egg-rabbit-plugin-key';
exports.rabbit = {

  /* ----------------------------------default config for simple use rabbitMQ----------------------------------- */
  default: {
    // url: 'amqp://admin:123456@192.168.217.128:5672',
  },
  // Message queue instance name
  queueName: 'egg-rabbit-test',
  app: true,
  agent: false,

  /* ----------------------------------Basic usage for RabbitMQ in Egg Plugin----------------------------------- */

  // only client rabbit config
  client: {
    url: 'amqp://admin:123456@192.168.217.128:5672',
    rabbit: {
      protocol: 'amqp',
      hostname: '192.168.217.128',
      port: 5672,
      username: 'admin',
      password: '123456',
      locale: 'en_US',
      frameMax: 0,
      heartbeat: 0,
      vhost: '/',
    },
    // other plugin config for more safe to the client if you have
    // socketOptions: {
    //   cert: certificateAsBuffer, // client cert
    //   key: privateKeyAsBuffer, // client key
    //   passphrase: 'MySecretPassword', // passphrase for key
    //   ca: [caCertAsBuffer], // array of trusted CA certs
    // },

  },

  /* ------------------------More advanced usage for RabbitMQ in Egg Plugin---------------------------------------- */

  // more client rabbit config
  //   clients: {
  //     client1: {
  //       // url: 'http://',
  //       rabbit: {
  //         protocol: 'amqp',
  //         hostname: '192.168.217.128',
  //         port: 5672,
  //         username: 'admin',
  //         password: '123456',
  //         locale: 'en_US',
  //         frameMax: 0,
  //         heartbeat: 0,
  //         vhost: '/',
  //       },
  // other plugin config for more safe to the client if you have
  //   socketParams: {
  //     cert: certificateAsBuffer, // client cert
  //     key: privateKeyAsBuffer, // client key
  //     passphrase: 'MySecretPassword', // passphrase for key
  //     ca: [ caCertAsBuffer ], // array of trusted CA certs
  // },

  // },
  // client2: {
  //   rabbit: {
  //     protocol: 'amqp',
  //     hostname: '192.168.217.128',
  //     port: 5672,
  //     username: 'admin',
  //     password: '123456',
  //     locale: 'en_US',
  //     frameMax: 0,
  //     heartbeat: 0,
  //     vhost: '/',
  //   },
  // other plugin config for more safe to the client if you have
  // socketParams: {
  //   cert: certificateAsBuffer, // client cert
  //   key: privateKeyAsBuffer, // client key
  //   passphrase: 'MySecretPassword', // passphrase for key
  //   ca: [ caCertAsBuffer ], // array of trusted CA certs
  // },
  // },
  // .... can add more client config for multi client data sources
//   },
};
