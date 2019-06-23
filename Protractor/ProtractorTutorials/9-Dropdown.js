//2 ways to handle dropdown
//1. All and Each
//2. Chain Locations
//3. tagName  

describe('Chain Locators Demo', function() {

	function Calc(a, b, c) {
		element(by.model("first")).sendKeys(a);
		// element(by.model("operator")).element(by.css("option[value='DIVISION']")).click();
		element(by.model("second")).sendKeys(b);

		element.all(by.tagName("option")).each(function(item) {
			// console.log(text);
			item.getAttribute("value").then(function(value) {

				if (value == c) {
					item.click();
				}
			})
		})
		/*
		 * ADDITION DIVISION MODULO MULTIPLICATION SUBTRACTION
		 */

		element(by.id("gobutton")).click();
	}

	it('Open Angular js WebSite', function() {

		browser.get('https://juliemr.github.io/protractor-demo/');

		// repeter, chain locators, css for identical tags
		// Calc(3, 2, "ADDITION")

		// Calc(3, 2, "MODULO")
		Calc(3, 2, "MULTIPLICATION")
		Calc(6, 2, "DIVISION")
		// Calc(3, 2, "SUBTRACTION")

		 element.all(by.repeater("result in memory")).each(function(item) {
		 item.element(by.css("td:nth-child(3)")).getText().then(function(text)
		 {
		 console.log(text);
		 })
		 })

		//element(by.model("operator")).element(by.css("operator:nth-child(4)")).click();

	})

})