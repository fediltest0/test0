exports.config = {
  sauceUser: process.env.SAUCE_USERNAME,
  sauceKey: process.env.SAUCE_ACCESS_KEY,
  capabilities: {
    'browserName': 'chrome',
    'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
    'name': 'test0 E2E',
    'build': process.env.TRAVIS_BUILD_NUMBER
  },
  framework: 'jasmine',
  specs: ['test/spec.js'],
 
};
