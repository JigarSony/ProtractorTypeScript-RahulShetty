import {browser,element,by} from "protractor";
import { async } from "q";
import { calculator } from "./PageObjects/calculator";

describe('Chain Locators Demo',()=>{
	
	it('Open Angular js WebSite',async()=>{
		
		await browser.get("https://juliemr.github.io/protractor-demo/");
		
		//repeter, chain locators, css for identical tags
        
        //await element(by.model("first")).sendKeys("4");

        let calc = new calculator();
        await calc.firstEditBox.sendKeys("8");
		//
		await element(by.model("operator")).element(by.css("option[value='DIVISION']")).click();
		//
        //await element(by.model("second")).sendKeys("2");
        
        await calc.secondEditBox.sendKeys("4");

        //await element(by.id("gobutton")).click();
        await calc.go.click();
		
		//repeater
		//element(by.repeater("result in memory"))
		
		//ElementChaining
		 //element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function(text) {
             calc.getResult.getText().then(function(text){
			console.log(text);
		})
    })
    
    xit('Angular Home Page Title Verification',async()=>{

        await browser.get("https://angularjs.org/");

        await element(by.linkText("angular.io")).click();

        await element(by.css("input[type='search']")).sendKeys("Hello");

        //await browser.getTitle();

    })
})