describe('Chain Locators Demo',function(){
	
	it('Open Angular js WebSite',function(){
		
		browser.get("https://juliemr.github.io/protractor-demo/");
		
		//repeter, chain locators, css for identical tags
		
		element(by.model("first")).sendKeys("4");
		//
		element(by.model("operator")).element(by.css("option[value='DIVISION']")).click();
		//
		element(by.model("second")).sendKeys("2");
		element(by.id("gobutton")).click();
		
		//repeater
		//element(by.repeater("result in memory"))
		
		//ElementChaining
		element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function(text) {
			console.log(text);
		})
	})
})