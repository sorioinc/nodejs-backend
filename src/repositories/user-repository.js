'use strict';

const GenericRepository = require('./generic-repository');

module.exports = class AlbumRepository extends GenericRepository {
  constructor(host) {
    super(host, 'users');
  }
};
