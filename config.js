exports.config = {
	seleniumAddress: 'http://localhost:4444/wd/hub',

	capabilities: {
    browserName: 'chrome'
  },

  specs: ['angularjs_home_spec.js'],

  jasmineNodeOpts: {
  	showColors: true
  }
};