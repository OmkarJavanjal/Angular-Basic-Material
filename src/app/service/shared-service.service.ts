import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs';
@Injectable()
export class SharedServiceService {
constructor() { }

/**
* 
*/
private filterMessageTitle1 = new BehaviorSubject('step1'); 
listenTitle1(): Observable<any>
{
return this.filterMessageTitle1.asObservable();
}
filterTitle1(message: any) {
this.filterMessageTitle1.next(message)
}


/**
* 
*/
private filterMessageTitle = new BehaviorSubject('step1'); 
listenTitle(): Observable<any>
{
return this.filterMessageTitle.asObservable();
}
filterTitle(message: any) {
console.log('this.message---', message);
this.filterMessageTitle.next(message)
}



private _listners = new Subject<any>();
listen(): Observable<any>
{
return this._listners.asObservable();
}
filter(filterBy: any) {
this._listners.next(filterBy);
}
/**
* 
*/
private filterMessageSource = new BehaviorSubject('default message'); 
//filterCurrentMessage = this.filterMessageSource.asObservable();
listenn(): Observable<any>
{
return this.filterMessageSource.asObservable();
}
filterData(message: any) {
this.filterMessageSource.next(message)
}
/**
* 
*/
private messageSource = new BehaviorSubject('default message'); 
currentMessage = this.messageSource.asObservable();
changeMessage(message: string) {
this.messageSource.next(message)
}
/**
* 
*/
private getShareDataSource = new BehaviorSubject('Currently data not present');
getShareData = this.getShareDataSource.asObservable();
setShareData(messageData) {
this.getShareDataSource.next(messageData)
};
/**
* 
*/
private getInputElm = new BehaviorSubject('Currently data not present');
getShareInputElm = this.getInputElm.asObservable();
setShareInputElm(InputElm) {
console.log('InputElm----', InputElm);
this.getInputElm.next(InputElm)
};
/**
* In case of data sharing we can not use Subejct we have to use only BehaviorSubject
*/
private subject = new Subject
<any>
();
setShareDataUsingSubject(messageSubject) {
this.subject.next(messageSubject); 
}
getMessage(): Observable<any>
{
return this.subject.asObservable();
}
/**
* 
*/
private getSharProducteData = new BehaviorSubject('Currently data not present');
getProductDatas = this.getSharProducteData.asObservable();
setShareProductData(productData) {
console.log('productData---', productData);
this.getSharProducteData.next(productData)
};
}