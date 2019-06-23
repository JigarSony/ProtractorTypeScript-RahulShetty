describe('Protractor Element Demo', function() {

	it('Locators', function() {
		
		/* for non angular application
		 * browser.waitForAngularEnabled(false);
		 * browser.get("https://www.google.com");
		 */
		
		browser.get("https://juliemr.github.io/protractor-demo/");
		element(by.model("first")).sendKeys("4");
		element(by.model("second")).sendKeys("2");
		element(by.id("gobutton")).click();

		//CSS :: tagname[attribute='value']
		/*element(by.css("h2[class='ng-binding']")).getText().then(function(text){
			console.log(text);
			})*/

		//real output disply when you resolve promise
		//protractor for 90% of methods will resolve  promise automatically 
		//if promise not resolved 2 probs
		//1 sequence not garuntee
		//2

		//Jasmin can take care of the same
		//sample :: //expect(true).toBe(true);
		expect(element(by.css("h2[class='ng-binding']")).getText()).toBe("6");

		browser.sleep(5000);
	})
})