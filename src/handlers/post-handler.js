'use strict';

module.exports = class PostHandler {
  constructor(postService, boomHelper) {
    this.postService = postService;
    this.boomHelper = boomHelper;

    this.getAll = this.getAll.bind(this);
    this.getById = this.getById.bind(this);
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

  async getAll(req, reply) {
    try {
      const posts = await this.postService.getAll();
      return reply(posts);
    } catch (err) {
      return reply(this.boomHelper.dispatchBoomCall(err));
    }
  }

  async getById(req, reply) {
    const { postId } = req.params;
    try {
      const post = await this.postService.getById(postId);
      return reply(post);
    } catch (err) {
      return reply(this.boomHelper.dispatchBoomCall(err));
    }
  }

  async create(req, reply) {
    try {
      const post = await this.postService.create(req.payload);
      return reply(post);
    } catch (err) {
      return reply(this.boomHelper.dispatchBoomCall(err));
    }
  }

  async update(req, reply) {
    const { postId } = req.params;
    try {
      const post = await this.postService.update(postId, req.payload);
      return reply(post);
    } catch (err) {
      return reply(this.boomHelper.dispatchBoomCall(err));
    }
  }

  async delete(req, reply) {
    const { postId } = req.params;
    try {
      const post = await this.postService.delete(postId);
      return reply(post);
    } catch (err) {
      return reply(this.boomHelper.dispatchBoomCall(err));
    }
  }
};
