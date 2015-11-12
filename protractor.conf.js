exports.config = {
  sauceUser: process.env.SAUCE_USERNAME,
  sauceKey: process.env.SAUCE_ACCESS_KEY,
  multiCapabilities: [{
    'browserName': 'chrome',
    'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
    'name': 'test0 [chrome]',
    'build': process.env.TRAVIS_BUILD_NUMBER
  }, {
    'browserName': 'ie',
    'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
    'name': 'test0 [ie]',
    'build': process.env.TRAVIS_BUILD_NUMBER
  }],
  framework: 'jasmine',
  specs: ['test/spec.js'],
 
};
