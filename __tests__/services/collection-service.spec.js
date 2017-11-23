/* globals jest, describe, test, expect, beforeEach */
/* eslint-disable global-require */

'use strict';

const posts = require('./posts-data.json');
const albums = require('./albums-data.json');
const users = require('./users-data.json');

describe('CollectionService', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
    jest.resetModules();
  });
  describe('getAll', () => {
    test('Should return the data from the repository successfully', () => {
      const postRepository = {
        getAll: jest.fn(() => Promise.resolve(posts)),
      };
      const albumRepository = {
        getAll: jest.fn(() => Promise.resolve(albums)),
      };
      const userRepository = {
        getAll: jest.fn(() => Promise.resolve(users)),
      };
      const CollectionService = require('../../src/services/collection-service');
      const collectionService = new CollectionService(postRepository, albumRepository, userRepository);

      const promise = collectionService.getAll();

      return promise.then((result) => {
        expect(result).toHaveProperty('posts');
        expect(result).toHaveProperty('albums');
        expect(result).toHaveProperty('users');
        expect(postRepository.getAll).toHaveBeenCalled();
        expect(albumRepository.getAll).toHaveBeenCalled();
        expect(userRepository.getAll).toHaveBeenCalled();
        expect(result.posts.length).toBe(30);
        expect(result.albums.length).toBe(30);
        expect(result.users.length).toBe(10);
      });
    });
    test('Should fail when error getting data from repositories', () => {
      const postRepository = {
        getAll: jest.fn(() => Promise.reject('Error from the repository.')),
      };
      const albumRepository = {
        getAll: jest.fn(),
      };
      const userRepository = {
        getAll: jest.fn(),
      };
      const CollectionService = require('../../src/services/collection-service');
      const collectionService = new CollectionService(postRepository, albumRepository, userRepository);

      const promise = collectionService.getAll();

      expect(promise).rejects.toEqual({ code: 500, message: 'An error occurred trying to get the collection.' });
    });
  });
});
