describe('Protractor Baby Step', function(){
	
	it('Open Angular Application', function(){
		browser.get("https://angularjs.org");
		
		browser.get("https://juliemr.github.io/protractor-demo/");
		
		browser.sleep(9000);
		console.log("In 1st Step");
	})
	
	it('Close the Browser', function(){
		//browser.close();
		
	})
})