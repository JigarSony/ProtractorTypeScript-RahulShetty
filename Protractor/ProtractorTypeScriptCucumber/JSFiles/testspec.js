"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const calculator_1 = require("./PageObjects/calculator");
describe('Chain Locators Demo', () => {
    it('Open Angular js WebSite', () => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get("https://juliemr.github.io/protractor-demo/");
        //repeter, chain locators, css for identical tags
        //await element(by.model("first")).sendKeys("4");
        let calc = new calculator_1.calculator();
        yield calc.firstEditBox.sendKeys("8");
        //
        yield protractor_1.element(protractor_1.by.model("operator")).element(protractor_1.by.css("option[value='DIVISION']")).click();
        //
        //await element(by.model("second")).sendKeys("2");
        yield calc.secondEditBox.sendKeys("4");
        //await element(by.id("gobutton")).click();
        yield calc.go.click();
        //repeater
        //element(by.repeater("result in memory"))
        //ElementChaining
        //element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function(text) {
        calc.getResult.getText().then(function (text) {
            console.log(text);
        });
    }));
    xit('Angular Home Page Title Verification', () => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get("https://angularjs.org/");
        yield protractor_1.element(protractor_1.by.linkText("angular.io")).click();
        yield protractor_1.element(protractor_1.by.css("input[type='search']")).sendKeys("Hello");
        //await browser.getTitle();
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdHNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90ZXN0c3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsMkNBQThDO0FBRTlDLHlEQUFzRDtBQUV0RCxRQUFRLENBQUMscUJBQXFCLEVBQUMsR0FBRSxFQUFFO0lBRWxDLEVBQUUsQ0FBQyx5QkFBeUIsRUFBQyxHQUFPLEVBQUU7UUFFckMsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDO1FBRWhFLGlEQUFpRDtRQUUzQyxpREFBaUQ7UUFFakQsSUFBSSxJQUFJLEdBQUcsSUFBSSx1QkFBVSxFQUFFLENBQUM7UUFDNUIsTUFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM1QyxFQUFFO1FBQ0YsTUFBTSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDeEYsRUFBRTtRQUNJLGtEQUFrRDtRQUVsRCxNQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRXZDLDJDQUEyQztRQUMzQyxNQUFNLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFNUIsVUFBVTtRQUNWLDBDQUEwQztRQUUxQyxpQkFBaUI7UUFDaEIsNkdBQTZHO1FBQ25HLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVMsSUFBSTtZQUNyRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25CLENBQUMsQ0FBQyxDQUFBO0lBQ0EsQ0FBQyxDQUFBLENBQUMsQ0FBQTtJQUVGLEdBQUcsQ0FBQyxzQ0FBc0MsRUFBQyxHQUFPLEVBQUU7UUFFaEQsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBRTVDLE1BQU0sb0JBQU8sQ0FBQyxlQUFFLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFakQsTUFBTSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVoRSwyQkFBMkI7SUFFL0IsQ0FBQyxDQUFBLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQyxDQUFBIn0=