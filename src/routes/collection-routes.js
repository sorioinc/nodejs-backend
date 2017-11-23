'use strict';

const Joi = require('joi');
const container = require('../container');

const { collectionHandler } = container.cradle;

module.exports = [
  {
    method: 'GET',
    path: '/collection',
    config: {
      handler: {
        async: collectionHandler.getAll,
      },
      description: 'Returns all the posts',
      notes: 'Returns all the posts',
      tags: ['api'],
      plugins: {
        'hapi-swagger': {
          responses: {
            200: {
              description: 'Success',
              schema: Joi.array().items(Joi.object({
                id: Joi.number()
                  .integer()
                  .description('Id of the post.'),
                userId: Joi.number()
                  .integer()
                  .description('Id of the user related to the post.'),
                title: Joi.string().description("Post's title"),
                body: Joi.string().description("Post's content"),
              })),
            },
          },
        },
      },
    },
  },
];
