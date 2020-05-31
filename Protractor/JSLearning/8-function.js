describe('Chain Locators Demo',function(){
	
//	function add(a, b) {
//		element(by.model("first")).sendKeys(a);
//		// element(by.model("operator")).element(by.css("option[value='DIVISION']")).click();
//		element(by.model("second")).sendKeys(b);
//		
//		element(by.id("gobutton")).click();
//	}
	
	function Add(a, b) {
		element(by.model("first")).sendKeys(a);
		element(by.model("second")).sendKeys(b);

		element(by.id("gobutton")).click();

	}
	it('Open Angular js WebSite',function(){
		
		browser.get("https://juliemr.github.io/protractor-demo/");
		browser.sleep(3000);
		
		// repeter, chain locators, css for identical tags
//		add(4, 2);
//		add(8, 2);
//		add(16, 2);
		Add(2, 3);
		Add(4, 3);
		Add(8, 3);
		
//		element.all(by.repeater("result in memory")).count().then(function(text) {
//			console.log(text);
//		})

		
		
		element.all(by.repeater("result in memory")).each(function(item) {
			//console.log("1");
			item.element(by.css("td:nth-child(3)")).getText().then(function(text) {
				//console.log("2");
				console.log(text);
			})
		})
	})
})