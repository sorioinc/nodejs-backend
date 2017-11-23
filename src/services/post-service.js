'use strict';

module.exports = class PostService {
  constructor(postRepository) {
    this.repository = postRepository;
  }

  getAll() {
    return new Promise(async (resolve, reject) => {
      try {
        const posts = await this.repository.getAll();
        return resolve(posts);
      } catch (err) {
        const message = 'An error occurred trying to get the list of posts.';
        return reject({
          code: 500,
          message,
        });
      }
    });
  }

  getById(postId) {
    return new Promise(async (resolve, reject) => {
      try {
        const post = await this.repository.getById(postId);
        return resolve(post);
      } catch (err) {
        const message = 'An error occurred trying to get the given post.';
        return reject({
          code: 500,
          message,
        });
      }
    });
  }

  create(payload) {
    return new Promise(async (resolve, reject) => {
      try {
        const post = await this.repository.create(payload);
        return resolve(post);
      } catch (err) {
        const message = 'An error occurred trying create the post.';
        return reject({
          code: 500,
          message,
        });
      }
    });
  }

  update(postId, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        const post = await this.repository.update(postId, payload);
        return resolve(post);
      } catch (err) {
        const message = 'An error occurred trying to update the post.';
        return reject({
          code: 500,
          message,
        });
      }
    });
  }

  delete(postId) {
    return new Promise(async (resolve, reject) => {
      try {
        const post = await this.repository.delete(postId);
        return resolve(post);
      } catch (err) {
        const message = 'An error occurred trying to delete the post.';
        return reject({
          code: 500,
          message,
        });
      }
    });
  }
};
