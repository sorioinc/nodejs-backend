'use strict';

module.exports = class CollectionHandler {
  constructor(collectionService, boomHelper) {
    this.collectionService = collectionService;
    this.boomHelper = boomHelper;

    this.getAll = this.getAll.bind(this);
  }

  async getAll(req, reply) {
    try {
      const posts = await this.collectionService.getAll();
      return reply(posts);
    } catch (err) {
      return reply(this.boomHelper.dispatchBoomCall(err));
    }
  }
};
