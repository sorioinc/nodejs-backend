const awilix = require('awilix');

const {
  ResolutionMode, createContainer, asClass, Lifetime,
} = awilix;

const repositoryUrl = 'https://jsonplaceholder.typicode.com';

const container = createContainer({ resolutionMode: ResolutionMode.PROXY });

container.registerValue('host', repositoryUrl);

container.loadModules(['src/common/**/*.js', 'src/handlers/**/*.js', 'src/services/**/*.js', 'src/repositories/**/*.js'], {
  formatName: 'camelCase',
  registrationOptions: {
    lifetime: Lifetime.SINGLETON,
    register: asClass,
    resolutionMode: ResolutionMode.CLASSIC,
  },
});

module.exports = container;
