'use strict';

const fs = require('fs');

const files = fs.readdirSync(__dirname);
const requires = files
  .filter(file => file.endsWith('-routes.js'))
  // eslint-disable-next-line global-require, import/no-dynamic-require
  .map(file => require(`./${file}`));

const routes = [].concat(...requires);
module.exports = routes;
