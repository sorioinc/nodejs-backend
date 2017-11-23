'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();
const hapiAsyncHandler = require('hapi-async-handler');
const vision = require('vision');
const inert = require('inert');
const hapiSwagger = require('hapi-swagger');

const hapiSwaggerOptions = {
  info: {
    title: 'Jibble Backend Test',
    version: '0.0.1',
    contact: {
      url: 'https://github.com/sorioinc/nodejs-backend',
    },
  },
  schemes: ['https'],
};

server.connection({
  port: process.env.PORT || 3000,
  routes: {
    cors: true,
  },
});

const plugins = [
  {
    register: hapiAsyncHandler,
  },
  {
    register: vision,
  },
  {
    register: inert,
  },
  {
    register: hapiSwagger,
    options: hapiSwaggerOptions,
  },
];

const options = {
  routes: {
    prefix: '/api',
  },
};

server.register(plugins, options, async (err) => {
  if (err) {
    throw err;
  }

  server.start((error) => {
    if (error) {
      throw error;
    }
    // eslint-disable-next-line global-require
    server.route(require('./src/routes/routes'));
    console.log(`server running at: ${server.info.uri}`);
  });
});
