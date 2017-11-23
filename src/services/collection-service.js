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
        const posts = await this.postRepository.getAll();
        const albums = await this.albumRepository.getAll();
        const users = await this.userRepository.getAll();

        const collection = [];
        for (let x = 1; x <= 30; x++) {
          const post = posts[Math.floor(Math.random() * posts.length)];
          const album = albums[Math.floor(Math.random() * albums.length)];
          const user = users[Math.floor(Math.random() * users.length)];
          collection.push({
            post,
            album,
            user,
          });
        }

        return resolve(collection);
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
