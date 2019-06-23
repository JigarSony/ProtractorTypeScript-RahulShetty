describe('Prortractor Alert Steps',function(){
	 
	it('Open Non Angular js WebSite Alert',function(){
		
		
		browser.waitForAngularEnabled(false)
		browser.driver.manage().window().maximize();
		browser.get("http://www.qaclickacademy.com/practice.php");
		browser.switchTo().frame('courses-iframe');
		
		element(by.css("a[href*='sign_in']")).getText().then(function(text){
			consol.log(text)
		})
		
	})
})