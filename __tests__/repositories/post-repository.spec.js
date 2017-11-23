/* globals jest, describe, test, expect, beforeEach */
/* eslint-disable global-require */

'use strict';

describe('PostRepository', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
    jest.resetModules();
  });

  describe('getAll', () => {
    test('Should return all the posts successfully', () => {
      const mockGet = jest.fn((url, callback) => {
        callback(null, {
          body: [
            {
              userId: 1,
              id: 1,
              title: 'post title',
              body: 'post content',
            },
          ],
        });
      });
      jest.mock('request', () => ({
        get: mockGet,
      }));

      const PostRepository = require('../../src/repositories/post-repository');
      const postRepository = new PostRepository('host', 'post');

      const url = 'host/posts';
      const options = {
        url,
        headers: {
          Accept: 'application/json',
        },
      };

      const promise = postRepository.getAll();

      return promise.then((response) => {
        expect(response).toEqual([
          {
            userId: 1,
            id: 1,
            title: 'post title',
            body: 'post content',
          },
        ]);
        expect(mockGet.mock.calls[0][0]).toMatchObject(options);
      });
    });
    test('Should reject on get error', () => {
      const mockGet = jest.fn().mockImplementationOnce((url, callback) => {
        callback('Error while getting.');
      });

      jest.mock('request', () => ({
        get: mockGet,
      }));

      const PostRepository = require('../../src/repositories/post-repository');
      const postRepository = new PostRepository('host', 'post');

      const promise = postRepository.getAll();

      return expect(promise).rejects.toBe('Error while getting.');
    });
  });
  describe('getById', () => {
    test('Should return the given post successfully', () => {
      const mockGet = jest.fn((url, callback) => {
        callback(null, {
          body: {
            userId: 1,
            id: 1,
            title: 'post title',
            body: 'post content',
          },
        });
      });
      jest.mock('request', () => ({
        get: mockGet,
      }));

      const PostRepository = require('../../src/repositories/post-repository');
      const postRepository = new PostRepository('host', 'post');

      const url = 'host/posts/3';
      const options = {
        url,
        headers: {
          Accept: 'application/json',
        },
      };

      const promise = postRepository.getById(3);

      return promise.then((response) => {
        expect(response).toEqual({
          userId: 1,
          id: 1,
          title: 'post title',
          body: 'post content',
        });
        expect(mockGet.mock.calls[0][0]).toMatchObject(options);
      });
    });
    test('Should reject on get error', () => {
      const mockGet = jest.fn().mockImplementationOnce((url, callback) => {
        callback('Error while getting.');
      });

      jest.mock('request', () => ({
        get: mockGet,
      }));

      const PostRepository = require('../../src/repositories/post-repository');
      const postRepository = new PostRepository('host', 'post');

      const promise = postRepository.getById(2);

      return expect(promise).rejects.toBe('Error while getting.');
    });
  });
  describe('create', () => {
    test('Should return the id after creating successfully', () => {
      const mockPost = jest.fn((url, callback) => {
        callback(null, {
          body: {
            id: 1,
          },
        });
      });
      jest.mock('request', () => ({
        post: mockPost,
      }));

      const payload = {
        userId: 1,
        id: 1,
        title: 'post title',
        body: 'post content',
      };

      const PostRepository = require('../../src/repositories/post-repository');
      const postRepository = new PostRepository('host', 'post');

      const url = 'host/posts';
      const options = {
        url,
        headers: {
          Accept: 'application/json',
        },
        json: payload,
      };

      const promise = postRepository.create(payload);

      return promise.then((response) => {
        expect(response).toEqual({
          id: 1,
        });
        expect(mockPost.mock.calls[0][0]).toMatchObject(options);
      });
    });
    test('Should reject on get error', () => {
      const mockPost = jest.fn().mockImplementationOnce((url, callback) => {
        callback('Error while getting.');
      });
      jest.mock('request', () => ({
        post: mockPost,
      }));

      const payload = {
        userId: 1,
        id: 1,
        title: 'post title',
        body: 'post content',
      };

      const PostRepository = require('../../src/repositories/post-repository');
      const postRepository = new PostRepository('host', 'post');

      const promise = postRepository.create(payload);

      return expect(promise).rejects.toBe('Error while getting.');
    });
  });
  describe('update', () => {
    test('Should return the new post after updating successfully', () => {
      const expectedResponse = {
        id: 1,
        title: 'title',
        body: 'content',
        userId: 23,
      };
      const mockPut = jest.fn((url, callback) => {
        callback(null, {
          body: expectedResponse,
        });
      });
      jest.mock('request', () => ({
        put: mockPut,
      }));

      const payload = {
        userId: 1,
        title: 'post title',
        body: 'post content',
      };

      const PostRepository = require('../../src/repositories/post-repository');
      const postRepository = new PostRepository('host', 'post');

      const url = 'host/posts/1';
      const options = {
        url,
        headers: {
          Accept: 'application/json',
        },
        json: payload,
      };

      const promise = postRepository.update(1, payload);

      return promise.then((response) => {
        expect(response).toBe(expectedResponse);
        expect(mockPut.mock.calls[0][0]).toMatchObject(options);
      });
    });
    test('Should reject on get error', () => {
      const mockPut = jest.fn().mockImplementationOnce((url, callback) => {
        callback('Error while getting.');
      });
      jest.mock('request', () => ({
        put: mockPut,
      }));

      const payload = {
        userId: 1,
        id: 1,
        title: 'post title',
        body: 'post content',
      };

      const PostRepository = require('../../src/repositories/post-repository');
      const postRepository = new PostRepository('host', 'post');

      const promise = postRepository.update(1, payload);

      return expect(promise).rejects.toBe('Error while getting.');
    });
  });
  describe('delete', () => {
    test('Should return the new post after updating successfully', () => {
      const mockDelete = jest.fn((url, callback) => {
        callback(null, {});
      });
      jest.mock('request', () => ({
        delete: mockDelete,
      }));

      const PostRepository = require('../../src/repositories/post-repository');
      const postRepository = new PostRepository('host', 'post');

      const url = 'host/posts/1';
      const options = {
        url,
        headers: {
          Accept: 'application/json',
        },
      };

      const promise = postRepository.delete(1);

      return promise.then((response) => {
        expect(response).toBe(true);
        expect(mockDelete.mock.calls[0][0]).toMatchObject(options);
      });
    });
    test('Should reject on get error', () => {
      const mockDelete = jest.fn().mockImplementationOnce((url, callback) => {
        callback('Error while getting.');
      });
      jest.mock('request', () => ({
        delete: mockDelete,
      }));

      const PostRepository = require('../../src/repositories/post-repository');
      const postRepository = new PostRepository('host', 'post');

      const promise = postRepository.delete(1);

      return expect(promise).rejects.toBe('Error while getting.');
    });
  });
});
