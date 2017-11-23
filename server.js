'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();
const hapiAsyncHandler = require('hapi-async-handler');
const vision = require('vision');
const inert = require('inert');
const hapiSwagger = require('hapi-swagger');
const AuthBearer = require('hapi-auth-bearer-token');
const BoomHelper = require('./src/common/boom-helper');

const boomHelper = new BoomHelper();

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
  {
    register: AuthBearer,
  },
];

server.register(plugins, async (err) => {
  if (err) {
    throw err;
  }

  server.auth.strategy('simple', 'bearer-access-token', {
    allowQueryToken: true,
    allowMultipleHeaders: false,
    accessTokenName: 'access_token',
    validateFunc(token, callback) {
      if (token === 'af24353tdsfw') {
        return callback(null, true, { token }, {});
      }

      return callback(null, false, { token }, {});
    },
    unauthorizedFunc: () => boomHelper.dispatchBoomCall({ code: 501 }),
  });

  server.start((error) => {
    if (error) {
      throw error;
    }
    server.realm.modifiers.route.prefix = '/api';
    // eslint-disable-next-line global-require
    server.route(require('./src/routes/routes'));
    console.log(`server running at: ${server.info.uri}`);
  });
});
