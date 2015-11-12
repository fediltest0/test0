exports.config = {
  framework: 'jasmine2',
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  seleniumAddress: 'http://ondemand.saucelabs.com/wd/hub',
  specs: ['test/spec.js']
};
