'use strict';

const Joi = require('joi');
const container = require('../container');

const { postHandler } = container.cradle;

module.exports = [
  {
    method: 'GET',
    path: '/posts',
    config: {
      auth: 'simple',
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
      auth: 'simple',
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
      auth: 'simple',
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
      description: 'Creates a new post',
      notes: 'Creates a new post',
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
    method: 'PUT',
    path: '/posts/{postId}',
    config: {
      auth: 'simple',
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
      description: 'Updates an existing post',
      notes: 'Updates an existing post',
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
    method: 'DELETE',
    path: '/posts/{postId}',
    config: {
      auth: 'simple',
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
      description: 'Deletes a post.',
      notes: 'Deletes a post.',
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
