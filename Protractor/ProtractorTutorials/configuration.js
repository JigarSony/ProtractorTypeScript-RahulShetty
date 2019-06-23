exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub', //direct connection
  //specs: ['spec1.js']
  //specs: ['5-Element.js'],
  //specs: ['6-ChainLocators.js'],
  //specs: ['7-AllLocators.js'],
  //specs: ['8-function.js'],
  //specs:['8-1-functionTutor.js'],
  //specs: ['9-Dropdown.js'],
  //specs:['10-Actions.js'],
  //specs:['12-Alert.js'],
  specs:['13-Frames.js'],
  capabilities: {
	  'browserName': 'chrome'
	  //'browserName': 'firefox'
	  //'browserName': 'internet explorer'
	}
};