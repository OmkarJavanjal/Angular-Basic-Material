import { AppPage } from './app.po';
import { dataJson } from './dataJson';
import { browser,element, by, promise,ElementFinder, ElementArrayFinder } from 'protractor';

describe('student-data App', () => {
  let page: AppPage;
  var originalTimeout;
   /* Mock data for creating a new Paste and editing existing paste */
   let data: dataJson;
   var screenshots = require('protractor-take-screenshots-on-demand');
   
  beforeEach(() => {
    page = new AppPage();
     data = new dataJson();
  });

  /**it('should display Students Login Form', () => {
    browser.waitForAngularEnabled(false);
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Students Registration Form');
  });*/

   it('should sendKeys in USer input text Box form submit', () => {

    //browser.waitForAngularEnabled(false);
    /** start method for /registration page*/
    browser.waitForAngularEnabled(true);
    page.navigateTo();
    let newPaste= data.getMockDatas();
    //let newPaste: any = page.getMockData();
    //take screenshots
    screenshots.takeScreenshot('first_Screen')
    browser.driver.sleep(1000);
    page.getUserInputFirstName().sendKeys(newPaste.firstName);
    browser.driver.sleep(1000);
    page.getInputLastName().sendKeys(newPaste.lastname);
    browser.driver.sleep(1000);
    page.getInputuser().sendKeys(newPaste.userId);
    browser.driver.sleep(1000);
    screenshots.takeScreenshot('second_Screen')
    page.getInputEmail().sendKeys(newPaste.emailId);
    browser.driver.sleep(1000);
    page.getInputPassword().sendKeys('1123456789');
    browser.driver.sleep(1000);
    page.getInputConfirmPassword().sendKeys('1123456789');
    browser.driver.sleep(1000);
    page.getInputMobile().sendKeys('9654132611');
    browser.driver.sleep(1000);
    page.getSelectGender();
    browser.driver.sleep(1000);
    page.getSelectCountry();
    browser.driver.sleep(2000);
    page.getSelectState();
    browser.driver.sleep(2000);
    page.getSelectCity();
    browser.driver.sleep(2000);
    page.getFormSubmitBtn().click();
    browser.driver.sleep(40000);
    screenshots.takeScreenshot('third_Screen')
    browser.waitForAngularEnabled(true);

/** start method for /detail page*/

    /**browser.driver.sleep(5000);
    page.getUpdateData();
    browser.driver.sleep(4000);
    page.getUserInputFirstName().clear();
    browser.driver.sleep(1000);
    page.getUserInputFirstName().sendKeys('Ravi');
    browser.driver.sleep(1000);
    page.getInputLastName().clear();
    browser.driver.sleep(1000);
    page.getInputLastName().sendKeys('Kumar');
    browser.driver.sleep(1000);
    page.getInputuser().clear();
    browser.driver.sleep(1000);
    page.getInputuser().sendKeys('ravisingh34');
    browser.driver.sleep(1000);
    page.getInputEmail().clear();
    browser.driver.sleep(1000);
    page.getInputEmail().sendKeys('ravisingh34@gmail.com');
    browser.driver.sleep(1000);
    page.getInputMobile().clear();
    browser.driver.sleep(1000);
    page.getInputMobile().sendKeys('9654132611');
    browser.driver.sleep(1000);
    page.getUpdateBtn().click();*/
    //browser.driver.sleep(5000);
   // page.getDeleteData();
   // browser.driver.sleep(5000);
   // page.getModalBtn();
   // browser.sleep(40000); 

   // page.getUserIdTextBox().clear();
    /** Get the value tfs background */
    //page.getUserIdTextBox().getAttribute('id');
  }); 

  /**it('should navigate in /setframe', () => {
    browser.waitForAngularEnabled(true);
    page.navigateTo();
    browser.driver.sleep(2000);
    page.getSelectedColor();
    
    browser.driver.sleep(2000);
    page.getSelectedBorder();
    browser.driver.sleep(2000);
    page.getSelectedBackground();
    browser.driver.sleep(2000);
    page.getCalBtn();
    browser.driver.sleep(2000);
    page.getPdfBtn();
    browser.sleep(40000); 
  });*/


 /** it('should sendKeys in USer input text Box', () => {
    browser.waitForAngularEnabled(false);
    page.navigateTo();
    page.getUserIdTextBox().sendKeys('abhinavsingh34');
    page.getPasswordTextBox().sendKeys('1123456789');
    page.getLoginBtn().click();
    browser.sleep(13000); 
   // page.getUserIdTextBox().clear();
    /** Get the value tfs background */
    //page.getUserIdTextBox().getAttribute('id');
  /**}); */
});

