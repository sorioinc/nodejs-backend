/* globals jest, describe, test, expect, beforeEach */
/* eslint-disable global-require */

'use strict';

describe('BoomHelper', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
    jest.resetModules();
  });

  const BoomHelper = require('../../src/common/boom-helper');
  const boomHelper = new BoomHelper();

  test('Should return not found', () => {
    const error = { code: 404, message: 'Record not found.' };
    const result = boomHelper.dispatchBoomCall(error);
    expect(result).toMatchObject(new Error('Record not found.'));
  });
  test('Should return bad request', () => {
    const error = { code: 400, message: 'Missing parameter.' };
    const result = boomHelper.dispatchBoomCall(error);
    expect(result).toMatchObject(new Error('Missing parameter.'));
  });
  test('Should return bad request', () => {
    const error = { code: 500, message: 'Something bad happened.' };
    const result = boomHelper.dispatchBoomCall(error);
    expect(result).toMatchObject(new Error('Something bad happened.'));
  });
  test('Should return error message on some other errors', () => {
    const error = { code: 700, message: 'Something else, bad, happened.' };
    const result = boomHelper.dispatchBoomCall(error);
    expect(result).toMatchObject(new Error('Something else, bad, happened.'));
  });
});
