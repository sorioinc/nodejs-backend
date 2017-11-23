/* globals jest, describe, test, expect, beforeEach */
/* eslint-disable global-require */

'use strict';

describe('PostService', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
    jest.resetModules();
  });
  describe('getAll', () => {
    test('Should return the data from the repository successfully', () => {
      const response = [
        {
          userId: 1,
          id: 1,
          title: 'post title',
          body: 'post content',
        },
      ];
      const repository = {
        getAll: jest.fn(() => Promise.resolve(response)),
      };
      const PostService = require('../../src/services/post-service');
      const postService = new PostService(repository);

      const promise = postService.getAll();

      expect(promise).resolves.toBe(response);
    });
    test('Should fail when error getting data from repository', () => {
      const repository = {
        getAll: jest.fn(() => Promise.reject('Error getting data.')),
      };
      const PostService = require('../../src/services/post-service');
      const postService = new PostService(repository);

      const promise = postService.getAll();

      expect(promise).rejects.toEqual({ code: 500, message: 'An error occurred trying to get the list of posts.' });
    });
  });
  describe('getById', () => {
    test('Should return the data from the repository successfully', () => {
      const response = {
        userId: 1,
        id: 1,
        title: 'post title',
        body: 'post content',
      };
      const repository = {
        getById: jest.fn(() => Promise.resolve(response)),
      };
      const PostService = require('../../src/services/post-service');
      const postService = new PostService(repository);

      const promise = postService.getById(1);

      expect(promise).resolves.toBe(response);
    });
    test('Should fail when error getting data from repository', () => {
      const repository = {
        getBy: jest.fn(() => Promise.reject('Error getting data.')),
      };
      const PostService = require('../../src/services/post-service');
      const postService = new PostService(repository);

      const promise = postService.getById(1);

      expect(promise).rejects.toEqual({ code: 500, message: 'An error occurred trying to get the given post.' });
    });
  });
  describe('create', () => {
    test('Should create the post successfully', () => {
      const response = {
        userId: 1,
        id: 1,
        title: 'post title',
        body: 'post content',
      };
      const repository = {
        create: jest.fn(() => Promise.resolve(response)),
      };
      const payload = {
        userId: 1,
        title: 'post title',
        body: 'post content',
      };

      const PostService = require('../../src/services/post-service');
      const postService = new PostService(repository);

      const promise = postService.create(payload);

      expect(promise).resolves.toBe(response);
    });
    test('Should fail when error posting data', () => {
      const repository = {
        create: jest.fn(() => Promise.reject('Error getting data.')),
      };
      const payload = {
        userId: 1,
        title: 'post title',
        body: 'post content',
      };

      const PostService = require('../../src/services/post-service');
      const postService = new PostService(repository);

      const promise = postService.create(payload);

      expect(promise).rejects.toEqual({ code: 500, message: 'An error occurred trying create the post.' });
    });
  });
  describe('update', () => {
    test('Should update the post successfully', () => {
      const response = {
        userId: 1,
        id: 1,
        title: 'post title',
        body: 'post content',
      };
      const repository = {
        update: jest.fn(() => Promise.resolve(response)),
      };
      const payload = {
        userId: 1,
        title: 'post title',
        body: 'post content',
      };

      const PostService = require('../../src/services/post-service');
      const postService = new PostService(repository);

      const promise = postService.update(1, payload);

      expect(promise).resolves.toBe(response);
    });
    test('Should fail when error updating data', () => {
      const repository = {
        update: jest.fn(() => Promise.reject('Error getting data.')),
      };
      const payload = {
        userId: 1,
        title: 'post title',
        body: 'post content',
      };

      const PostService = require('../../src/services/post-service');
      const postService = new PostService(repository);

      const promise = postService.update(1, payload);

      expect(promise).rejects.toEqual({ code: 500, message: 'An error occurred trying to update the post.' });
    });
  });
  describe('delete', () => {
    test('Should delete the post successfully', () => {
      const repository = {
        delete: jest.fn(() => Promise.resolve({})),
      };

      const PostService = require('../../src/services/post-service');
      const postService = new PostService(repository);

      const promise = postService.delete(1);

      expect(promise).resolves.toEqual({});
    });
    test('Should fail when error updating data', () => {
      const repository = {
        delete: jest.fn(() => Promise.reject('Error getting data.')),
      };

      const PostService = require('../../src/services/post-service');
      const postService = new PostService(repository);

      const promise = postService.delete(1);

      expect(promise).rejects.toEqual({ code: 500, message: 'An error occurred trying to delete the post.' });
    });
  });
});
