'use strict';

const GenericRepository = require('./generic-repository');

module.exports = class PostRepository extends GenericRepository {
  constructor(host) {
    super(host, 'posts');
  }
};
