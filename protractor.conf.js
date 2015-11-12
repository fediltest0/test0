exports.config = {
  framework: 'jasmine2',
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  seleniumAddress: 'http://'+ process.env.SAUCE_USERNAME+':'+process.env.SAUCE_ACCESS_KEY+'http://ondemand.saucelabs.com/wd/hub',
  specs: ['test/spec.js']
};
