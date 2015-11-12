exports.config = {
  sauceUser: process.env.SAUCE_USERNAME,
  sauceKey: process.env.SAUCE_ACCESS_KEY,
  capabilities: {
    'browserName': 'chrome'
  },
  framework: 'jasmine',
  specs: ['test/spec.js'],
 
};
