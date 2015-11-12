exports.config = {
  framework: 'jasmine2',
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  seleniumAddress: 'http://hub.browserstack.com/wd/hub',
  specs: ['test/spec.js']
};
