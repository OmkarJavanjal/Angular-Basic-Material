import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
   return browser.get('/registration');
  }
  getParagraphText() {
    return element(by.css('.registrationHeading')).getText();
  }
  /** start method for /registration page*/

  /* Mock data for creating a new Paste and editing existing paste */
 
  /**getMockData(): any {
    let data: any = {firstName: "Something",lastname: "Ruby",userId: "Testsingh34",emailId: "abhinavsingh34"}
    return data;
   }*/
  getUserInputFirstName() {
    return element(by.id('inputFirstName'));
  }
  getInputLastName(){
    return element(by.id('inputLastName'));
  }
  getInputuser(){
    return element(by.id('inputuser'));
  }
  getInputEmail(){
    return element(by.id('inputEmail'));
  }
  getInputPassword(){
    return element(by.id('inputPassword'));
  }
  getInputConfirmPassword(){
    return element(by.id('inputConfirmPassword'));
  }
  getInputMobile(){
    return element(by.id('inputMobile'));
  }
  getSelectGender(){
    return element(by.id('select')).$('[value="Male"]').click();
  }
  getSelectCountry(){
    return element(by.id('selectCountry')).$('[ng-reflect-ng-value="Afghanistan"]').click();
  }
  getSelectState(){
    return element(by.id('selectState')).$('[ng-reflect-ng-value="Badakhshan"]').click();
  }
  getSelectCity(){
    return element(by.id('selectCity')).$('[ng-reflect-ng-value="Arghanj Khwāh"]').click();
  }
  getFormSubmitBtn(){
    return element(by.id('formSubmitBtn'));
  }

/** start method for /detail page*/

  getUpdateData() {
  return element(by.css('.updateData')).$('[id="1updateData"]').click();
  }
  getOpenModal() {
    return element(by.css('.openModalData')).$('[id="4openModal"]').click();
  }
  getDeleteData() {
    return element(by.css('.deleteData')).$('[id="5deleteData"]').click();
  }
  getModalBtn() {
    return  element(by.cssContainingText('.btn-default', 'Yes')).click();
  }
  getUpdateBtn(){
    return element(by.css('.updateBtn'));
  }

/** start method for /setframe page*/

getSelectedColor(){
  return element(by.id('selectedColor')).$('[ng-reflect-ng-value="aliceblue"]').click();
}
getSelectedBorder(){
  return element(by.id('selectedBorder')).$('[ng-reflect-ng-value="border1"]').click();
}
getSelectedBackground(){
  return element(by.id('selectedBackground')).$('[ng-reflect-ng-value="backgroundName1"]').click();
} 
getCalBtn(){
  return element(by.css('.cal')).click();
}
getPdfBtn(){
  return element(by.css('.pdf')).click();
}


}
