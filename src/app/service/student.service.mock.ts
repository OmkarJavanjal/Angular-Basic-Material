
import { Injectable, Output, EventEmitter } from '@angular/core';
import { RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import { User } from './user';
import { countryDataType } from './user';
import { HTTP_URL } from './httpUrl';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { incrementDetails } from './user';
import { prodDetails } from './user';
/** 
 **  Use @Injectable() to declare the StudentService class as an Injectable
 */
@Injectable()
/**
 ** Create and export StudentService Class { } and we can import this class inside another components
 */

export class StudentServiceMock {
	/**
	 * 
	 * 
	 */

	@Output() userChangeEmitter: EventEmitter<any> = new EventEmitter<any>();

	getUserDetail(term) {
		this.userChangeEmitter.emit(term);
	}
	getupdatedUser() {
		return this.userChangeEmitter;
	}
	getHorsepower() {
		return 150;
	}
	getName() {
		return 'Basic engine';
	}

	private messageSource = new BehaviorSubject<string>("default message");
	currentMessage = this.messageSource.asObservable(); // asObservable is use for Observable to data
	changeMessage(message: string) {
		console.log(message);
		this.messageSource.next(message);
	}


	/**
	** create headers object and declare it to be Headers and Add headers object to the constructor function
	*/
	headers: Headers;
	/**
	 ** create options object and declare it to be RequestOptions and Add options object to the constructor function
	*/
	options: RequestOptions;
    /**
	** constructor method is use to create instance of the dependency service and moudle
	*/
	constructor() {
	 }

	 /**
	  * 

	  */

	  getConfirmationData(){
		return Observable.of(
			{      
				"confirmations": [
				  {
					"refType": 1,
					"item": "4215",
					"amount": null,
					"message": "PaymentSuccesful",
					"statusCode": "2",
					"statusDescription": null,
					"confirmationRef": null,
					"renewedItems": [
					{
							"productId": 1328,
							"productName": "Business Electronic Filing - Unlimited",
							"productCode": "BUSEFUNL",
							"productFamily": "UltraTax CS",
							"price": 1685,
							"quantity": 1,
							"taxable": false,
							"source": "RenewalProducts",
							"productStatus": "Current",
							"chargeType": null
					 },
					  {
						"productId": 1328,
						"productName": "Business Electronic Filing - Unlimited",
						"productCode": "BUSEFUNL",
						"productFamily": "UltraTax CS",
						"price": 1685,
						"quantity": 1,
						"taxable": false,
						"source": "RenewalProducts",
						"productStatus": "Current",
						"chargeType": null
					  },
					  {
						"productId": 378,
						"productName": "Fixed Assets CS Local Area Network",
						"productCode": "DSNET",
						"productFamily": "Fixed Assets CS",
						"seats": 4,
						"price": 80,
						"taxable": true,
						"productDisplayGroup": "",
						"source": "RenewalProducts",
						"productStatus": "Current",
						"productType": "Network",
						"chargeType": null
					  }
					  ,
					  {
						"productId": 378,
						"productName": "Assets CS Local Area Network",
						"productCode": "DSNET",
						"productFamily": "Assets CS",
						"seats": 4,
						"price": 180,
						"taxable": true,
						"productDisplayGroup": "",
						"source": "RenewalProducts",
						"productStatus": "Current",
						"productType": "Network",
						"chargeType": null
					  }
					]
				  }
				]
			  }
		);
	}


    /**
	** create sendStudentdData() function to POST the data by using 'POST' method request and pass 'user' object data as a parameter
	*/
	getPriceList(id: any): Observable<incrementDetails> {
		return Observable.of(
			{
				"productCode": "PREW",
				"incrementBy": 5,
				"minQuantity": 1,
				"maxQuantity": 20
			}
		);
	}
	/**
	 * 
	 */
	prodDetails(): Observable<prodDetails> {
		let productDetails: prodDetails = new prodDetails("CPL PREMIER SUB PKG", "CPL - Premier Subscription Package", "PREW", 300, 1, 300, 20, 10, "Good", "XSAE", 500, 2000, 0, 0, 100, 16546798, "NA", false);
		return Observable.of(productDetails);
	};


	getProductData(): Observable<any> {
		return Observable.of(
			{
				"product": "CPL PREMIER SUB PKG",
				"productDescription": "CPL - Premier Subscription Package",
				"startDate": "2018-08-20T00:00:00",
				"endDate": "2019-08-19T00:00:00",
				"renewalType": 0,
				"totalPrice": 300,
				"quantity": 2,
				"productId": "PREW",
				"productTaxCode": "180510",
				"taxAmount": "0",
				"shippingAmount": "0",
				"discountPercent": "0",
				"incrementBy": 2,
				"itemPrice": 300,
				"invoiceNo": "16546798",
				"lineItemID": "16546798-PREW-1"
			}
		);
	}
	/**
		 * 
		 * @param productCode :get data based on productCode
		 */
	getPrice(productCode): Observable<any> {
		return Observable.of(
			{
				"product": "CPL PREMIER SUB PKG",
				"productDescription": "CPL - Premier Subscription Package",
				"startDate": "2018-08-20T00:00:00",
				"endDate": "2019-08-19T00:00:00",
				"renewalType": 0,
				"totalPrice": 300,
				"quantity": 2,
				"productId": "PREW",
				"productTaxCode": "180510",
				"taxAmount": "0",
				"shippingAmount": "0",
				"discountPercent": "0",
				"incrementBy": 2,
				"itemPrice": 300,
				"invoiceNo": "16546798",
				"lineItemID": "16546798-PREW-1"
			}
		);
	}
	/**
	 * 
	 * @param productCode :get data based on productCode
	 */
	get_Data(productCode): Observable<any> {
		return Observable.of(
			{
				"price": 20,
				"id": "CF00D",
				"incrementBy": 5,
				"minQuantity": 2,
				"maxQuantity": 20,
				"productCode": "CF00D",
				"totalPrice": 200,
				"ismaxQuantity": false,
				"isminQuantity": true
			}
		);
	}
	update_user_data(productInfoData, productCodeId) {
		return Observable.of(
			{
				"price": 20,
				"id": "BM00D",
				"incrementBy": 5,
				"minQuantity": 10,
				"maxQuantity": 20,
				"productCode": "CF00D",
				"totalPrice": 200,
				"ismaxQuantity": false,
				"isminQuantity": true
			}
		);
	}
	getNewUser: EventEmitter<any> = new EventEmitter<any>();

	sendStudentdData(user: User): Observable<User> {
		this.getNewUser.emit(user);
		return Observable.of(new User({
			"firstName": "Satwant",
			"lastName": "Singh",
			"userName": "stawantsingh34",
			"email": "abhinavsingh34@gmail.com",
			"password": {
				"pwd": "123456789",
				"confirmPwd": "123456789"
			},
			"mobile": "9654132611",
			"gender": "Male",
			"id": 3
		}));
	}

	sendStudentdLoginData(signInForm): Observable<any> {
		console.log('signInForm', signInForm);
		return Observable.of(new User({
			"firstName": "Satwant",
			"lastName": "Singh",
			"userName": "stawantsingh34",
			"email": "abhinavsingh34@gmail.com",
			"password": {
				"pwd": "123456789",
				"confirmPwd": "123456789"
			},
			"mobile": "9654132611",
			"gender": "Male",
			"id": 3
		}));
	}


	getNewUserData(): Observable<User> {
		return Observable.of(new User({
			"firstName": "Satwant",
			"lastName": "Singh",
			"userName": "stawantsingh34",
			"email": "abhinavsingh34@gmail.com",
			"password": {
				"pwd": "123456789",
				"confirmPwd": "123456789"
			},
			"mobile": "9654132611",
			"gender": "Male",
			"id": 3
		}));
	}
	/**
	** create updateStudentdData() function to update the data by using 'PUT' method request and pass 'user' object data  and id as a parameter
	*/
	updateStudentdData(user: User, id: number): Observable<User> {
		return Observable.of(new User({
			"firstName": "Satwant",
			"lastName": "Singh",
			"userName": "stawantsingh34",
			"email": "abhinavsingh34@gmail.com",
			"password": {
				"pwd": "123456789",
				"confirmPwd": "123456789"
			},
			"mobile": "9654132611",
			"gender": "Male",
			"id": 3
		}));
	}
	/**
	** create deleteStudentData() function to delete the data by using 'delete' method request based on selected id which are passing as a parameter. 
	*/
	deleteStudentData(id: number): Observable<User> {
		return Observable.of(new User({
			"firstName": "Satwant",
			"lastName": "Singh",
			"userName": "stawantsingh34",
			"email": "abhinavsingh34@gmail.com",
			"password": {
				"pwd": "123456789",
				"confirmPwd": "123456789"
			},
			"mobile": "9654132611",
			"gender": "Male",
			"id": 3
		}));
	}
	/**
	** create getStudentData() function to get the data by using 'GET' method request. 
	*/
	getStudentData(): Observable<User[]> {
		let user1 = new User({
			"firstName": "Satwant",
			"lastName": "Singh",
			"userName": "stawantsingh34",
			"email": "abhinavsingh34@gmail.com",
			"password": {
				"pwd": "123456789",
				"confirmPwd": "123456789"
			},
			"mobile": "9654132611",
			"gender": "Male",
			"id": 3
		});
		let user2 = new User({
			"firstName": "Satwant",
			"lastName": "Singh",
			"userName": "stawantsingh34",
			"email": "abhinavsingh34@gmail.com",
			"password": {
				"pwd": "123456789",
				"confirmPwd": "123456789"
			},
			"mobile": "9654132611",
			"gender": "Male",
			"id": 4
		});
		let users: User[] = [];
		users.push(user1);
		users.push(user2);
		return Observable.of(users);
	}

	/**
	** create clearSession() function to get the data by using 'GET' method request. 
	*/
	fireGetRequest() {
		return Observable.of(new User({
			"firstName": "Satwant",
			"lastName": "Singh",
			"userName": "stawantsingh34",
			"email": "abhinavsingh34@gmail.com",
			"password": {
				"pwd": "123456789",
				"confirmPwd": "123456789"
			},
			"mobile": "9654132611",
			"gender": "Male",
			"id": 3
		}));
	}



    /**
	** create getSingleStudentDetail() function to get the data by using 'GET' method request based on selected id which are passing as a parameter. 
	*/
	getSingleStudentDetail(id: any) {
		return Observable.of(new User({
			"firstName": "Satwant",
			"lastName": "Singh",
			"userName": "stawantsingh34",
			"email": "abhinavsingh34@gmail.com",
			"password": {
				"pwd": "123456789",
				"confirmPwd": "123456789"
			},
			"mobile": "9654132611",
			"gender": "Male",
			"id": 3
		}));
	}
    /**
	** create searchProductDetail() function to get the data by using 'GET' method request based on selected id which are passing as a parameter and search students details.
	*/
	searchProductDetail(term): Observable<string> {
		return Observable.of('Test');
	}

	searchStudentData(term): Observable<string> {
		return Observable.of('Test');
	}

	/**
	** create searchStudentDetail() function to get the data by using 'GET' method request based on selected id which are passing as a parameter and search students details.
	*/
	searchStudentDetail(terms): Observable<string> {
		return Observable.of('Test');
	}
    /**
	** create handleErrorObservable() function to get the error data response by different request using 'GET','POST','PUT','DELETE' method request.
	*/
	sendLoginStudentdData(loginUserName: string, loginUserPass: string) {

		return Observable.of(new User({
			"firstName": "Satwant",
			"lastName": "Singh",
			"userName": "stawantsingh34",
			"email": "abhinavsingh34@gmail.com",
			"password": {
				"pwd": "123456789",
				"confirmPwd": "123456789"
			},
			"mobile": "9654132611",
			"gender": "Male",
			"id": 3
		}));
	};
	/**
	 ** getCountryDataByLimit method
	 */
	getCountryDataByLimit(startIndex: number, endIndex: number): Observable<countryDataType[]> {
		return Observable.of([{
			"id": 25,
			"country": "Afghanistan",
			"state": "Badakhshan",
			"city": "Yaftal-e Suflá"
		},
		{
			"id": 26,
			"country": "Afghanistan",
			"state": "Badakhshan",
			"city": "Yamgān"
		}]);
	};
	/**
	** getCountryData method
	*/
	getCountryData(): Observable<countryDataType[]> {
		return Observable.of([{
			"id": 25,
			"country": "Afghanistan",
			"state": "Badakhshan",
			"city": "Yaftal-e Suflá"
		},
		{
			"id": 26,
			"country": "Afghanistan",
			"state": "Badakhshan",
			"city": "Yamgān"
		}]);
	};
	/**
	** getStateData method
	*/
	getStateData(countryName: string): Observable<Array<countryDataType>> {
		return Observable.of([{
			"id": 25,
			"country": "Afghanistan",
			"state": "Badakhshan",
			"city": "Yaftal-e Suflá"
		},
		{
			"id": 26,
			"country": "Afghanistan",
			"state": "Badakhshan",
			"city": "Yamgān"
		}]);
	};
	/**
	** getCityData method
	*/
	getCityData(selectedCountry: string, selectedState: string): Observable<countryDataType[]> {
		return Observable.of([{
			"id": 25,
			"country": "Afghanistan",
			"state": "Badakhshan",
			"city": "Yaftal-e Suflá"
		},
		{
			"id": 26,
			"country": "Afghanistan",
			"state": "Badakhshan",
			"city": "Yamgān"
		}]);
	};
	/**
	** getFinalCSCData method
	*/
	getFinalCSCData(
		selectedCountry: string,
		selectedState: string,
		selectedCity: string
	): Observable<countryDataType[]> {
		return Observable.of([{
			"id": 25,
			"country": "Afghanistan",
			"state": "Badakhshan",
			"city": "Yaftal-e Suflá"
		},
		{
			"id": 26,
			"country": "Afghanistan",
			"state": "Badakhshan",
			"city": "Yamgān"
		}]);
	};
	/**
	** searchCountryDetail method is use to pull country data as per send country name
	*/
	searchCountryDetail(terms): Observable<countryDataType[]> {
		return Observable.of([{
			"id": 25,
			"country": "Afghanistan",
			"state": "Badakhshan",
			"city": "Yaftal-e Suflá"
		},
		{
			"id": 26,
			"country": "Afghanistan",
			"state": "Badakhshan",
			"city": "Yamgān"
		}]);
	};



	/**
	** searchCountryDetail method is use to pull country data as per send country name
	*/

	getColorData(): Observable<User[]> {
		let user1 = new User({
			"firstName": "Satwant",
			"lastName": "Singh",
			"userName": "stawantsingh34",
			"email": "abhinavsingh34@gmail.com",
			"password": {
				"pwd": "123456789",
				"confirmPwd": "123456789"
			},
			"mobile": "9654132611",
			"gender": "Male",
			"id": 3
		});
		let user2 = new User({
			"firstName": "Satwant",
			"lastName": "Singh",
			"userName": "stawantsingh34",
			"email": "abhinavsingh34@gmail.com",
			"password": {
				"pwd": "123456789",
				"confirmPwd": "123456789"
			},
			"mobile": "9654132611",
			"gender": "Male",
			"id": 4
		});
		let users: User[] = [];
		users.push(user1);
		users.push(user2);
		return Observable.of(users);
	};

	/**
	** searchCountryDetail method is use to pull country data as per send country name
	*/

	getBorderData(): Observable<User[]> {
		let user1 = new User({
			"firstName": "Satwant",
			"lastName": "Singh",
			"userName": "stawantsingh34",
			"email": "abhinavsingh34@gmail.com",
			"password": {
				"pwd": "123456789",
				"confirmPwd": "123456789"
			},
			"mobile": "9654132611",
			"gender": "Male",
			"id": 3
		});
		let user2 = new User({
			"firstName": "Satwant",
			"lastName": "Singh",
			"userName": "stawantsingh34",
			"email": "abhinavsingh34@gmail.com",
			"password": {
				"pwd": "123456789",
				"confirmPwd": "123456789"
			},
			"mobile": "9654132611",
			"gender": "Male",
			"id": 4
		});
		let users: User[] = [];
		users.push(user1);
		users.push(user2);
		return Observable.of(users);
	};

	/**
	** searchCountryDetail method is use to pull country data as per send country name
	*/
	getBackgroundData(): Observable<User[]> {
		let user1 = new User({
			"firstName": "Satwant",
			"lastName": "Singh",
			"userName": "stawantsingh34",
			"email": "abhinavsingh34@gmail.com",
			"password": {
				"pwd": "123456789",
				"confirmPwd": "123456789"
			},
			"mobile": "9654132611",
			"gender": "Male",
			"id": 3
		});
		let user2 = new User({
			"firstName": "Satwant",
			"lastName": "Singh",
			"userName": "stawantsingh34",
			"email": "abhinavsingh34@gmail.com",
			"password": {
				"pwd": "123456789",
				"confirmPwd": "123456789"
			},
			"mobile": "9654132611",
			"gender": "Male",
			"id": 4
		});
		let users: User[] = [];
		users.push(user1);
		users.push(user2);
		return Observable.of(users);
	};

	/**
	** getStudentDataBasedOnDate method is use to 
	*/
	getStudentDataBasedOnDate(fromDate: any, toDate: any): Observable<any> {
		let user1 = new User({
			"firstName": "Satwant",
			"lastName": "Singh",
			"userName": "stawantsingh34",
			"email": "abhinavsingh34@gmail.com",
			"password": {
				"pwd": "123456789",
				"confirmPwd": "123456789"
			},
			"mobile": "9654132611",
			"gender": "Male",
			"id": 3
		});
		let user2 = new User({
			"firstName": "Satwant",
			"lastName": "Singh",
			"userName": "stawantsingh34",
			"email": "abhinavsingh34@gmail.com",
			"password": {
				"pwd": "123456789",
				"confirmPwd": "123456789"
			},
			"mobile": "9654132611",
			"gender": "Male",
			"id": 4
		});
		let users: User[] = [];
		users.push(user1);
		users.push(user2);
		return Observable.of(users);
	};

	/**
   ** getFrameData method is use to 
   */
	getFrameData(): Observable<Array<this>> {
		return null;
	};

	/**
	** postFrameData method is use to 
	*/
	postFrameData(frameInfo: object): Observable<object> {
		return null;
	};


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

	getData() {
		return null;
	}
	getDataUpdate() {
		return null;
	}

}
