'use strict';

const Boom = require('boom');

module.exports = class BoomHelper {
  dispatchBoomCall(error) {
    switch (error.code) {
      case 404:
        return Boom.notFound(error.message);
      case 400:
        return Boom.badRequest(error.message);
      case 500:
        return Boom.badImplementation(error.message);
      default:
        if (error.code > 0) {
          return new Boom(error.code, { statusCode: error.code });
        }
        return Boom.badImplementation();
    }
  }
};
