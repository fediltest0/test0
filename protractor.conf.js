exports.config = {
  sauceUser: process.env.SAUCE_USERNAME,
  sauceKey: process.env.SAUCE_ACCESS_KEY,
  framework: 'jasmine2',
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  seleniumAddress: 'http://ondemand.saucelabs.com/wd/hub',
  specs: ['test/spec.js']
};
