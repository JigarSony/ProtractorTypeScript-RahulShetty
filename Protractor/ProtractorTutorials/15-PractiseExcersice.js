describe('Protractor Alert steps',function(){
	
	function selectItem(product){
		//take 4 card in list
		//go through each index in list and get title ==> select index i add button
		
		element.all(by.tagName("app-card")).each(function(item) {
			item.element(by.css("h4[class*='card-title'] a")).getText().then(function(text) {
				if(text=="Samsung Note 8"){
					//click add to card
					item.element(by.css("button[class*='btn btn-info']")).click();
				}
//				else{
//					console.log("Fail")
//				}
			})
		})
	}
	
	
	it('Open NonAngular js website Alert',function(){
		
		browser.get("https://qaclickacademy.github.io/protocommerce/");
		
		element(by.name("name")).sendKeys("Jigar");
		
		element(by.css("input[name='email']")).sendKeys("abc@mail.com")

		element(by.id("exampleInputPassword1")).sendKeys("password");
		
		//element(by.id("exampleCheck1")).click();
		element(by.css("input[type='checkbox']")).click();
		
		element(by.cssContainingText("[id='exampleFormControlSelect1'] option","Female")).click();
		
		element.all(by.name("inlineRadioOptions")).first().click();
		
		element(by.buttonText('Submit')).click().then(function() {
			element(by.css("div[class*='alert-success']")).getText().then(function(text) {
				console.log(text);
			})
		})
		
		element(by.name("name")).clear();
		
		element(by.name("name")).sendKeys("M").then(function() {
			element(by.css("[class*='alert alert-danger']")).getText().then(function(text) {
				console.log(text);
			})
		})
		
		element(by.linkText("Shop")).click();
		
			selectItem("Samsung Note 8");
			selectItem("iphone X");
		
		element(by.partialLinkText("Checkout")).getText().then(function(text) {
			console.log(text);
			
//			var result = text.split("(");
//			
//			var x = Number(result[1].trim().charAt(0));
//			
//			var y = x+1;
//			
//			console.log(y);
			
			expect(result[1].trim().charAt(0)).toBe("2");
		})
		
	})
})