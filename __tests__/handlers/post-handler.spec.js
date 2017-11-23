/* globals jest, describe, test, expect, beforeEach */
/* eslint-disable global-require */

'use strict';

describe('PostHandler', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
    jest.resetModules();
  });

  const BoomHelper = require('../../src/common/boom-helper');
  const boomHelper = new BoomHelper();

  describe('getAll', () => {
    test('Should return all posts', () => {
      const response = [
        {
          userId: 1,
          id: 1,
          title: 'post title',
          body: 'post content',
        },
      ];
      const postService = {
        getAll: jest.fn(() => Promise.resolve(response)),
      };
      const request = {};
      const reply = jest.fn();

      const PostHandler = require('../../src/handlers/post-handler');
      const postHandler = new PostHandler(postService, boomHelper);

      const promise = postHandler.getAll(request, reply);

      return promise.then(() => {
        expect(reply).toHaveBeenCalledWith(response);
      });
    });
    test('Should fail when exception at retrieving posts', () => {
      const error = new Error('Error retrieving data.');
      const postService = {
        getAll: jest.fn(() => Promise.reject(error)),
      };
      const request = {};
      const reply = jest.fn();

      const PostHandler = require('../../src/handlers/post-handler');
      const postHandler = new PostHandler(postService, boomHelper);

      const promise = postHandler.getAll(request, reply);

      return promise.catch((err) => {
        expect(err).toBe('');
        expect(reply).toHaveBeenCalledWith('');
      });
    });
  });
  describe('getById', () => {
    test('Should return the given post', () => {
      const response = {
        userId: 1,
        id: 1,
        title: 'post title',
        body: 'post content',
      };
      const postService = {
        getById: jest.fn(() => Promise.resolve(response)),
      };
      const request = {
        params: {
          postId: 1,
        },
      };
      const reply = jest.fn();

      const PostHandler = require('../../src/handlers/post-handler');
      const postHandler = new PostHandler(postService, boomHelper);

      const promise = postHandler.getById(request, reply);

      return promise.then(() => {
        expect(reply).toHaveBeenCalledWith(response);
      });
    });
    test('Should fail when exception at retrieving posts', () => {
      const error = new Error('Error retrieving data.');
      const postService = {
        getById: jest.fn(() => Promise.reject(error)),
      };
      const request = {
        params: {
          postId: 1,
        },
      };
      const reply = jest.fn();

      const PostHandler = require('../../src/handlers/post-handler');
      const postHandler = new PostHandler(postService, boomHelper);

      const promise = postHandler.getById(request, reply);

      return promise.catch((err) => {
        expect(err).toBe('');
        expect(reply).toHaveBeenCalledWith('');
      });
    });
  });
  describe('create', () => {
    test('Should create a new post successfully', () => {
      const response = {
        userId: 1,
        id: 1,
        title: 'post title',
        body: 'post content',
      };
      const postService = {
        create: jest.fn(() => Promise.resolve(response)),
      };
      const request = {
        payload: {
          userId: 1,
          title: 'post title',
          body: 'post content',
        },
      };
      const reply = jest.fn();

      const PostHandler = require('../../src/handlers/post-handler');
      const postHandler = new PostHandler(postService, boomHelper);

      const promise = postHandler.create(request, reply);

      return promise.then(() => {
        expect(reply).toHaveBeenCalledWith(response);
      });
    });
    test('Should fail when posting endpoint', () => {
      const error = new Error('Error retrieving data.');
      const postService = {
        create: jest.fn(() => Promise.reject(error)),
      };
      const request = {
        payload: {
          userId: 1,
          title: 'post title',
          body: 'post content',
        },
      };
      const reply = jest.fn();

      const PostHandler = require('../../src/handlers/post-handler');
      const postHandler = new PostHandler(postService, boomHelper);

      const promise = postHandler.create(request, reply);

      return promise.catch((err) => {
        expect(err).toBe('');
        expect(reply).toHaveBeenCalledWith('');
      });
    });
  });
  describe('update', () => {
    test('Should update a post successfully', () => {
      const response = {
        userId: 1,
        id: 1,
        title: 'post title',
        body: 'post content',
      };
      const postService = {
        update: jest.fn(() => Promise.resolve(response)),
      };
      const request = {
        params: {
          postId: 1,
        },
        payload: {
          userId: 1,
          title: 'post title',
          body: 'post content',
        },
      };
      const reply = jest.fn();

      const PostHandler = require('../../src/handlers/post-handler');
      const postHandler = new PostHandler(postService, boomHelper);

      const promise = postHandler.update(request, reply);

      return promise.then(() => {
        expect(reply).toHaveBeenCalledWith(response);
      });
    });
    test('Should fail when posting endpoint', () => {
      const error = new Error('Error retrieving data.');
      const postService = {
        update: jest.fn(() => Promise.reject(error)),
      };
      const request = {
        params: {
          postId: 1,
        },
        payload: {
          userId: 1,
          title: 'post title',
          body: 'post content',
        },
      };
      const reply = jest.fn();

      const PostHandler = require('../../src/handlers/post-handler');
      const postHandler = new PostHandler(postService, boomHelper);

      const promise = postHandler.update(request, reply);

      return promise.catch((err) => {
        expect(err).toBe('');
        expect(reply).toHaveBeenCalledWith('');
      });
    });
  });
  describe('delete', () => {
    test('Should delete a post successfully', () => {
      const postService = {
        delete: jest.fn(() => Promise.resolve({})),
      };
      const request = {
        params: {
          postId: 1,
        },
      };
      const reply = jest.fn();

      const PostHandler = require('../../src/handlers/post-handler');
      const postHandler = new PostHandler(postService, boomHelper);

      const promise = postHandler.delete(request, reply);

      return promise.then(() => {
        expect(reply).toHaveBeenCalledWith({});
      });
    });
    test('Should fail when posting endpoint', () => {
      const error = new Error('Error retrieving data.');
      const postService = {
        delete: jest.fn(() => Promise.reject(error)),
      };
      const request = {
        params: {
          postId: 1,
        },
      };
      const reply = jest.fn();

      const PostHandler = require('../../src/handlers/post-handler');
      const postHandler = new PostHandler(postService, boomHelper);

      const promise = postHandler.delete(request, reply);

      return promise.catch((err) => {
        expect(err).toBe('');
        expect(reply).toHaveBeenCalledWith('');
      });
    });
  });
});
