describe('Prortractor Alert Steps',function(){
	 
	it('Open Non Angular js WebSite Alert',function(){
		
		
		browser.waitForAngularEnabled(false)
		browser.get("http://www.qaclickacademy.com/practice.php");
		
		element(by.id("alertbtn")).click();
		
		browser.switchTo().alert().accept().then(function() {
			browser.sleep(5000);
		})
//		browser.switchTo().alert().cancel();
//		browser.switchTo().alert().dismiss()
//		browser.switchTo().alert().getText();
		
		
	})
})