'use strict';

module.exports = class CollectionService {
  constructor(postRepository, albumRepository, userRepository) {
    this.postRepository = postRepository;
    this.albumRepository = albumRepository;
    this.userRepository = userRepository;
  }

  getAll() {
    return new Promise(async (resolve, reject) => {
      try {
        let posts = await this.postRepository.getAll();
        posts = posts.sort(() => 0.5 - Math.random()).slice(0, 30);

        let albums = await this.albumRepository.getAll();
        albums = albums.sort(() => 0.5 - Math.random()).slice(0, 30);

        let users = await this.userRepository.getAll();
        users = users.sort(() => 0.5 - Math.random()).slice(0, 30);

        return resolve({
          posts,
          albums,
          users,
        });
      } catch (err) {
        const message = 'An error occurred trying to get the collection.';
        return reject({
          code: 500,
          message,
        });
      }
    });
  }
};
