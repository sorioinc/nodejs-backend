'use strict';

const Joi = require('joi');
const container = require('../container');

const { postHandler } = container.cradle;

module.exports = [
  {
    method: 'GET',
    path: '/posts',
    config: {
      handler: {
        async: postHandler.getAll,
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
  {
    method: 'GET',
    path: '/posts/{postId}',
    config: {
      validate: {
        params: {
          postId: Joi.number()
            .integer()
            .required()
            .description('Post Id'),
        },
      },
      handler: {
        async: postHandler.getById,
      },
      description: 'Returns the specified post',
      notes: 'Returns the specified post',
      tags: ['api'],
      plugins: {
        'hapi-swagger': {
          responses: {
            200: {
              description: 'Success',
              schema: Joi.object({
                id: Joi.number()
                  .integer()
                  .description('Id of the post.'),
                userId: Joi.number()
                  .integer()
                  .description('Id of the user related to the post.'),
                title: Joi.string().description("Post's title"),
                body: Joi.string().description("Post's content"),
              }),
            },
          },
        },
      },
    },
  },
  {
    method: 'POST',
    path: '/posts',
    config: {
      validate: {
        payload: {
          userId: Joi.number()
            .integer()
            .required()
            .description('Id of the user related to the post.'),
          title: Joi.string()
            .required()
            .description("Post's title"),
          body: Joi.string()
            .required()
            .description("Post's content"),
        },
      },
      handler: {
        async: postHandler.create,
      },
      description: 'Returns the newly created post',
      notes: 'Returns the newly created post',
      tags: ['api'],
      plugins: {
        'hapi-swagger': {
          responses: {
            200: {
              description: 'Success',
              schema: Joi.object({
                id: Joi.number()
                  .integer()
                  .description('Id of the post.'),
              }),
            },
          },
        },
      },
    },
  },
  {
    method: 'PUT',
    path: '/posts/{postId}',
    config: {
      validate: {
        payload: {
          userId: Joi.number()
            .integer()
            .required()
            .description('Id of the user related to the post.'),
          title: Joi.string()
            .required()
            .description("Post's title"),
          body: Joi.string()
            .required()
            .description("Post's content"),
        },
      },
      handler: {
        async: postHandler.update,
      },
      description: 'Returns the newly created post',
      notes: 'Returns the newly created post',
      tags: ['api'],
      plugins: {
        'hapi-swagger': {
          responses: {
            200: {
              description: 'Success',
              schema: Joi.object({
                id: Joi.number()
                  .integer()
                  .description('Id of the post.'),
              }),
            },
          },
        },
      },
    },
  },
  {
    method: 'DELETE',
    path: '/posts/{postId}',
    config: {
      validate: {
        params: {
          postId: Joi.number()
            .integer()
            .required()
            .description('Post Id'),
        },
      },
      handler: {
        async: postHandler.delete,
      },
      description: 'Returns the specified post',
      notes: 'Returns the specified post',
      tags: ['api'],
      plugins: {
        'hapi-swagger': {
          responses: {
            200: {
              description: 'Success',
              schema: Joi.object({}),
            },
          },
        },
      },
    },
  },
];
