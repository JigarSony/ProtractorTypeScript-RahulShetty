describe('Prortractor Synchronization',function(){
	 
	it('Open Non Angular js WebSite Sync',function(){
		
		browser.waitForAngularEnabled(false)
		browser.driver.manage().window().maximize();
		browser.get("http://www.itgeared.com/demo/1506-ajax-loading.html");
		
		element(by.css("a[href*='loadAjax']")).click();
		
		var EC = protractor.ExpectedConditions;
		
		browser.wait(EC.invisibilityOf(element(by.id("loader"),5000)));
		//browser.wait(EC.visibilityOf(element(by.id("results"),8000)));
	
		element(by.id("results")).getText().then(function(text) {
			console.log(text);
		})
		

		
	})
})