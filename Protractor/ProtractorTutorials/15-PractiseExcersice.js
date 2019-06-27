describe('Protractor Alert steps',function(){
	
	function selectItem(product){
		//take 4 card in list
		//go through each index in list and get title ==> select index i add button
		
		element.all(by.tagName("app-card")).each(function(item) {
			item.element(by.css("h4[class*='card-title'] a")).getText().then(function(text) {
				if(text==product){
					//click add to card
					item.element(by.css("button[class*='btn btn-info']")).click();
				}
//				else{
//					console.log("Fail")
//				}
			})
		})
	}
	
	function getPrice(){
		for(var i=1;i<=3;i++){
			element(by.css("tbody tr:nth-child("+i+") td:nth-child(4)")).getText().then(function(text) {
				console.log(text);
				
				var price1 = text.split(" ")
				console.log(price1[1]);
				browser.sleep(5000);
			})
		}
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
		
			selectItem("iphone X");
			selectItem("Samsung Note 8");
			selectItem("Nokia Edge");
		
			element(by.partialLinkText("Checkout")).getText().then(function(text) {
			console.log(text);
			
			var result = text.split("(");
			
			var x = Number(result[1].trim().charAt(0));
//			
//			var y = x+1;
//			
//			console.log(y);
			
			expect(result[1].trim().charAt(0)).toBe("3");
		})
		
		element(by.partialLinkText("Checkout")).click();
		
			//getPrice();
			var price11;
			var price21;
			var price31;
			element(by.css("tbody tr:nth-child(1) td:nth-child(4)")).getText().then(function(text) {
				console.log(text);
				
				var price1 = text.split(" ")
				console.log(price1[1]);
				price11 = price1[1];
			})
			
			element(by.css("tbody tr:nth-child(2) td:nth-child(4)")).getText().then(function(text) {
				console.log(text);
				
				var price2 = text.split(" ")
				console.log(price2[1]);
				price21 = price2[1];
			})
			
			element(by.css("tbody tr:nth-child(3) td:nth-child(4)")).getText().then(function(text) {
				console.log(text);
				
				var price3 = text.split(" ")
				console.log(price3[1]);
				price31 = price3[1];
			})
			
			var total = price11+price21+price31;
			console.log("Hi");
			console.log(total);
			
			var actualTotal;
			element(by.css(" tbody tr:nth-child(4) strong")).getText().then(function(text){
				var actotal = text.split(" ")
				console.log(actotal[1]);
				//actotal[1] == actualTotal;
				//console.log(actualTotal);
			})
			
			//expect(total).toBe(actualTotal);
			
		
	})
})