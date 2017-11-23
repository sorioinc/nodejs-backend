'use strict';

const request = require('request');

module.exports = class GenericRepository {
  constructor(host, resource) {
    this.host = host;
    this.resource = resource;
  }

  getAll() {
    return new Promise((resolve, reject) => {
      const url = `${this.host}/${this.resource}`;
      const options = {
        url,
        headers: {
          Accept: 'application/json',
        },
        json: true,
      };
      request.get(options, (error, response) => {
        if (error) {
          return reject(error);
        }
        return resolve(response.body);
      });
    });
  }

  getById(itemId) {
    return new Promise((resolve, reject) => {
      const url = `${this.host}/${this.resource}/${itemId}`;
      const options = {
        url,
        headers: {
          Accept: 'application/json',
        },
        json: true,
      };
      request.get(options, (error, response) => {
        if (error) {
          return reject(error);
        }
        return resolve(response.body);
      });
    });
  }

  create(payload) {
    return new Promise((resolve, reject) => {
      const url = `${this.host}/${this.resource}`;
      const options = {
        url,
        headers: {
          Accept: 'application/json',
        },
        json: payload,
      };
      request.post(options, (error, response) => {
        if (error) {
          return reject(error);
        }
        return resolve(response.body);
      });
    });
  }

  update(itemId, payload) {
    return new Promise((resolve, reject) => {
      const url = `${this.host}/${this.resource}/${itemId}`;
      const options = {
        url,
        headers: {
          Accept: 'application/json',
        },
        json: payload,
      };
      request.put(options, (error, response) => {
        if (error) {
          return reject(error);
        }
        return resolve(response.body);
      });
    });
  }

  delete(itemId) {
    return new Promise((resolve, reject) => {
      const url = `${this.host}/${this.resource}/${itemId}`;
      const options = {
        url,
        headers: {
          Accept: 'application/json',
        },
      };
      request.delete(options, (error) => {
        if (error) {
          return reject(error);
        }
        return resolve(true);
      });
    });
  }
};
