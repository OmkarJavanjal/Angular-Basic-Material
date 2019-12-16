import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
/**
** postMethodRequest method is use to post user details during registration and perform POST method request to post data.
*/
@Injectable()
/**
** postMethodRequest method is use to post user details during registration and perform POST method request to post data.
*/
export class HttpMethodService {
/**
** postMethodRequest method is use to post user details during registration and perform POST method request to post data.
*/
constructor(private http: Http) { }//HTTP_URL.baseSearchUrl, HTTP_URL.user_name, HTTP_URL.passward, loginData
/**
** validateLoginRequest method is use to validate the user login details and perform GET method request to get respose.
** @param httpRequestUrl is the url
** @param userName is use to match the userName of logdin user
** @param UserPassword is use to match the userPassword of logdin user
** @param loginUserName is  the userName of logdin user
** @param loginUserPass is the userPassword of logdin user
*/	
/**
** handleErrorObservable method is use to handle error if request is not response
** @param error is error which are pass as parameter
*/	
handleErrorObservable(error: any) {
let errMsg = (error.message) ? error.message :
error.status ? '${error.status} - ${error.statusText}' : 'Server error';
return Observable.throw(errMsg)
}
/**
** extractData method is use to get suscess response 
** @param res: Response is the response data
*/	
extractData(res: Response) {
let body = res.json();
return body || {};
}
getData(){			
return this.http.get('http://localhost:3000/registration1')  
.map(this.extractData)//map as a middle-ware which transforms the response into json.. if we remove it the response comes into string format.
.catch(this.handleErrorObservable);	   
}
getDataUpdate(){			
return this.http.get('http://localhost:3000/registration2')  
.map(this.extractData)//map as a middle-ware which transforms the response into json.. if we remove it the response comes into string format.
.catch(this.handleErrorObservable);	   
}
validateLoginRequest(httpRequestUrl,userName,UserPassword,loginUserName, loginUserPass){	
console.log(httpRequestUrl + userName + loginUserName+ UserPassword + loginUserPass);		
return this.http.get(httpRequestUrl + userName + loginUserName + UserPassword + loginUserPass)  
.map(this.extractData)//map as a middle-ware which transforms the response into json.. if we remove it the response comes into string format.
.catch(this.handleErrorObservable);	   
}
/**
** postMethodRequest method is use to post user details during registration and perform POST method request to post data.
** @param httpRequestUrl is the url on whic we need to perform post request
** @param postData is the user details data which are use to post on server using POST request
*/
postMethodRequest(httpRequestUrl, postData){	 
console.log('httpRequestUrl', httpRequestUrl);
console.log('postData', postData);
return this.http.post(httpRequestUrl, postData)
.map(this.extractData)//map as a middle-ware which transforms the response into json.. if we remove it the response comes into string format.
.catch(this.handleErrorObservable);	   
}
/**
* 
* @param loginbaseurl Login Details check
* @param postData 
*/
postLoginRequest(loginbaseurl, postData){	 
console.log('loginbaseurl', loginbaseurl);
console.log('postData', postData);
return this.http.post(loginbaseurl, postData)
.map(this.extractData)//map as a middle-ware which transforms the response into json.. if we remove it the response comes into string format.
.catch(this.handleErrorObservable);	   
}
/**
** getMethodRequest method is use to get responce using GET method request.
** @param httpRequestUrl is the url which are use in case of get request process
*/	
getMethodRequest(httpRequestUrl){	   
return this.http.get(httpRequestUrl)
.map(this.extractData) //map as a middle-ware which transforms the response into json.. if we remove it the response comes into string format.
.catch(this.handleErrorObservable);	   
}
/**
** getMethodRequest method is use to get responce using GET method request based on query param.
** @param httpRequestUrl is the url which are use in case of get request process
** @param requestId is use as a query param and based on match query param will get responce 
*/
getMethodRequestById(httpRequestUrl, requestId){	   
return this.http.get(httpRequestUrl + requestId)
.map(this.extractData) //map as a middle-ware which transforms the response into json.. if we remove it the response comes into string format.
.catch(this.handleErrorObservable);	   
}
/**
** deleteMethodRequest method is use to delete data using delete method request based on query param.
** @param httpRequestUrl is the url which are use in case of delete request process
** @param requestId is use as a query param and based on match query param will delete responce 
*/	
deleteMethodRequest(httpRequestUrl, requestId){	 
console.log(requestId); 
console.log(httpRequestUrl +'/'+ requestId	); 
return this.http.delete(httpRequestUrl +'/'+ requestId)
.map(this.extractData) //map as a middle-ware which transforms the response into json.. if we remove it the response comes into string format.
.catch(this.handleErrorObservable);	   
}	
/**
** putMethodRequest method is use to perform PUT request and update data
** @param httpRequestUrl is the url to perform PUT request and to update the data
** @param requestId is use to match the object in whic object we need to update the data
** @param userRequest is data which are use to send to update the response based on id match in PUT request
*/	 
putMethodRequest(httpRequestUrl,requestId,userRequest){	   
return this.http.put(httpRequestUrl + requestId, userRequest)
.map(this.extractData) //map as a middle-ware which transforms the response into json.. if we remove it the response comes into string format.
.catch(this.handleErrorObservable);	   
}
/**
** getSearchEntries method is use to search data and based on input data it will return  get respose.
** @param httpRequestUrl is the url which are use in case of search process
** @param queryUrl is use query param which are use in search process
** @param term is the value based on that we get response
*/	
getSearchEntries(httpRequestUrl, queryUrl, term) {	
console.log("httpRequestUrl + queryUrl + term --", httpRequestUrl + queryUrl + term);
return this.http
.get(httpRequestUrl + queryUrl + term)
.map(this.extractData)
.catch(this.handleErrorObservable);	
}
/**
** getRequestWithFiveParameter method is use to perform GET method request to get respose.
** @param httpRequestUrl is the url
** @param userName is use to match the userName of logdin user
*/	  
getRequestWithFiveParameter(httpRequestUrl,query1,query2,param1, param2){	
console.log(httpRequestUrl + query1 + param1+ query2 + param2);		
return this.http.get(httpRequestUrl + query1 + param1+ query2 + param2)  
.map(this.extractData)
.catch(this.handleErrorObservable);	   
}
/**
** getRequestWithSevenParameter method is use to  perform GET method request to get respose.
** @param httpRequestUrl is the url
*/	
getRequestWithSevenParameter(httpRequestUrl,query1,query2,query3, param1, param2, param3){	
console.log(httpRequestUrl + query1 + param1+ query2 + param2 + query3 + param3);		
return this.http.get(httpRequestUrl + query1 + param1+ query2 + param2 + query3 + param3)  
.map(this.extractData)
.catch(this.handleErrorObservable);	   
}
/**
** getMethodRequestByLimit method is use to perform GET method request to get respose based on different-2 param and based on set limit startIndex and endIndex
** @param httpRequestUrl is the url to process get request
*/	
getMethodRequestByLimit(httpRequestUrl,query1,query2, param1, param2){	
console.log(httpRequestUrl + query1 + param1+ query2 + param2);		
return this.http.get(httpRequestUrl + query1 + param1+ query2 + param2)  
.map(this.extractData)
.catch(this.handleErrorObservable);	   
}
getsingleuser(httpRequestUrl, productCode) {
console.log(httpRequestUrl + productCode);	
return this.http
.get(httpRequestUrl + productCode)
.map(this.extractData)
.catch(this.handleErrorObservable);	
}
/**
** putMethodRequest method is use to perform PUT request and update data
** @param httpRequestUrl is the url to perform PUT request and to update the data
** @param requestId is use to match the object in whic object we need to update the data
** @param userRequest is data which are use to send to update the response based on id match in PUT request
*/	 
putMethodRequest_toupdateQty(httpRequestUrl,productCodeId,productInfoData){	
return this.http.put(httpRequestUrl+productCodeId,productInfoData)
.map(this.extractData)
.catch(this.handleErrorObservable);	   
}
/**
** getMethodRequest method is use to get responce using GET method request.
** @param httpRequestUrl is the url which are use in case of get request process
*/	
getMethodRequest_TogetUserData(httpRequestUrl){	  
return this.http.get(httpRequestUrl)
.map(this.extractData)
.catch(this.handleErrorObservable);	   
}
/**
* 
* Below code for All about for Grid Part in ANgular6
* 
*/
getGridRequest(){
}
postGridRequest(){
}
puttGridRequest(){
}
deleteGridRequest(){
}
/**
* 
* Below code for All about for High-Chart Part in ANgular6
* 
*/
getChartRequest(){
}
postChartRequest(){
}
puttChartRequest(){
}
deleteChartRequest(){
}
}