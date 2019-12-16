import {
    Injectable, Output, EventEmitter
}
from '@angular/core';
import {
    Response, Headers, RequestOptions, URLSearchParams, Http
}
from '@angular/http';
import {
    HttpClientModule, HttpParams
}
from '@angular/common/http';
import {
    Observable
}
from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import {
    User
}
from './user';
import {
    countryDataType
}
from './user';
import {
    incrementDetails
}
from './user';
import {
    HTTP_URL
}
from './httpUrl';
import {
    HttpMethodService
}
from './http-method.service';
import {
    BehaviorSubject
}
from 'rxjs/BehaviorSubject';
import {
    prodDetails
}
from '../service/user';

/** 
 **  Use @Injectable() to declare the StudentService class as an Injectable
 */
@Injectable()
    /**
     ** Create and export StudentService Class { } and we can import this class inside another components
     */

export class StudentService {

    /**
     ** create getSingleStudentDetail() function to get the data by using 'GET' method request based on selected id which are passing as a parameter. 
     */
    getPrice(id: any) {
        return this.httpMethodService.getMethodRequestById(HTTP_URL.demobaseurl, id);
    }

    getPriceList(id: any): Observable < incrementDetails > {
            return this.httpMethodService.getMethodRequestById(HTTP_URL.incrementDetails, id);
        }
        /**
         * 
         * 
         */

    @Output() userChangeEmitter: EventEmitter < any > = new EventEmitter < any > ();

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

    private messageSource = new BehaviorSubject < string > ("default message");
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
    constructor(private httpMethodService: HttpMethodService, private http: Http) {
            this.headers = new Headers({
                'Content-Type': 'application/json',
                'Accept': 'q=0.8;application/json;q=0.9'
            });
            this.options = new RequestOptions({
                headers: this.headers
            });
        }
        /**
         ** create sendStudentdData() function to POST the data by using 'POST' method request and pass 'user' object data as a parameter
         */
    getNewUser: EventEmitter < any > = new EventEmitter < any > ();

    sendStudentdData(user: User): Observable < User > {
        this.getNewUser.emit(user);
        return this.httpMethodService.postMethodRequest(HTTP_URL.baseurl, user)
    }

    sendStudentdLoginData(signInForm): Observable < any > {
        console.log('signInForm', signInForm);
        return this.httpMethodService.postLoginRequest(HTTP_URL.loginbaseurl, signInForm)
    }

    getNewUserData(): Observable < User > {
            return this.getNewUser; /// how can we use inside another page to get latest data
        }
        /**
         ** create updateStudentdData() function to update the data by using 'PUT' method request and pass 'user' object data  and id as a parameter
         */
    updateStudentdData(user: User, id: number): Observable < User > {
            console.log('user ', user);
            console.log('user type of --  ', typeof user);
            return this.httpMethodService.putMethodRequest(HTTP_URL.baseurl, id, user);
        }
        /**
         ** create deleteStudentData() function to delete the data by using 'delete' method request based on selected id which are passing as a parameter. 
         */
    deleteStudentData(id: number): Observable < User > {
            return this.httpMethodService.deleteMethodRequest(HTTP_URL.baseurl, id);
        }
        /**
         ** create getStudentData() function to get the data by using 'GET' method request. 
         */
    getStudentData() {
        return this.httpMethodService.getMethodRequest(HTTP_URL.baseurl);
    }

    /**
     ** create clearSession() function to get the data by using 'GET' method request. 
     */
    fireGetRequest() {
        return this.httpMethodService.getMethodRequest(HTTP_URL.checkSession);
    }

    /**
     ** create getSingleStudentDetail() function to get the data by using 'GET' method request based on selected id which are passing as a parameter. 
     */
    getSingleStudentDetail(id: any) {
            return this.httpMethodService.getMethodRequestById(HTTP_URL.baseurl, id);
        }
        /**
         ** create searchProductDetail() function to get the data by using 'GET' method request based on selected id which are passing as a parameter and search students details.
         */
    searchProductDetail(term): Observable < string > {
        console.log('term->', term);
        return this.httpMethodService.getSearchEntries(
            HTTP_URL.baseCuntryUrl,
            HTTP_URL.queryCountryUrl,
            term
        );
    }

    searchStudentData(term): Observable < string > {
        return this.httpMethodService.getSearchEntries(
            HTTP_URL.searchurl,
            HTTP_URL.searchName,
            term
        );
    }

    /**
     ** create searchStudentDetail() function to get the data by using 'GET' method request based on selected id which are passing as a parameter and search students details.
     */
    searchStudentDetail(terms): Observable < string > {
            return terms.debounceTime(400)
                .distinctUntilChanged()
                .switchMap(term => this.httpMethodService.getSearchEntries( // switchMap is also use for search operation process
                    HTTP_URL.baseCuntryUrl,
                    HTTP_URL.queryCountryUrl,
                    term
                ));
        }
        /**
         ** create handleErrorObservable() function to get the error data response by different request using 'GET','POST','PUT','DELETE' method request.
         */
    sendLoginStudentdData(loginUserName: string, loginUserPass: string) {

            return this.httpMethodService.validateLoginRequest(
                HTTP_URL.baseurl,
                HTTP_URL.user_name,
                HTTP_URL.passward,
                loginUserName,
                loginUserPass
            );
        }
        /**
         ** getCountryDataByLimit method
         */
    getCountryDataByLimit(startIndex: number, endIndex: number): Observable < countryDataType[] > {
            return this.httpMethodService.getMethodRequestByLimit(
                HTTP_URL.baseCuntryUrl,
                HTTP_URL.queryStartIndex,
                HTTP_URL.queryEndIndex,
                startIndex,
                endIndex
            );
        }
        /**
         ** getCountryData method
         */
    getCountryData(): Observable < countryDataType[] > {
            return this.httpMethodService.getMethodRequest(HTTP_URL.baseCuntryUrl);
        }
        /**
         ** getStateData method
         */
    getStateData(countryName: string): Observable < Array < countryDataType >> {
            return this.httpMethodService.getSearchEntries(
                HTTP_URL.baseCuntryUrl,
                HTTP_URL.queryCountryUrl,
                countryName
            );
        }
        /**
         ** getCityData method
         */
    getCityData(selectedCountry: string, selectedState: string): Observable < countryDataType[] > {
            return this.httpMethodService.getRequestWithFiveParameter(
                HTTP_URL.baseCuntryUrl,
                HTTP_URL.queryCountryUrl,
                HTTP_URL.queryStateUrl,
                selectedCountry,
                selectedState
            );
        }
        /**
         ** getFinalCSCData method
         */
    getFinalCSCData(
            selectedCountry: string,
            selectedState: string,
            selectedCity: string): Observable < countryDataType[] > {
            return this.httpMethodService.getRequestWithSevenParameter(
                HTTP_URL.baseCuntryUrl,
                HTTP_URL.queryCountryUrl, HTTP_URL.queryStateUrl,
                HTTP_URL.queryCityUrl,
                selectedCountry, selectedState, selectedCity
            );
        }
        /**
         ** searchCountryDetail method is use to pull country data as per send country name
         */
    searchCountryDetail(terms): Observable < countryDataType[] > {
        return terms.debounceTime(400) // debounceTime delays 4 sec for values emitted by the source Observable, and 
            // drops previous pending delayed emissions if a new value arrives on the source Observable.
            .distinctUntilChanged() //Only emit the value when the current value is different than the last.
            .switchMap(term => this.httpMethodService.getSearchEntries(
                HTTP_URL.baseCuntryUrl,
                HTTP_URL.queryUrl,
                term
            ));
    }

    /**
     ** searchCountryDetail method is use to pull country data as per send country name
     */

    getColorData(): Observable < User[] > {
        return this.httpMethodService.getMethodRequest(HTTP_URL.baseColorurl);
    }

    /**
     ** searchCountryDetail method is use to pull country data as per send country name
     */

    getBorderData(): Observable < User[] > {
        return this.httpMethodService.getMethodRequest(HTTP_URL.baseBorderhUrl);
    }

    /**
     ** searchCountryDetail method is use to pull country data as per send country name
     */
    getBackgroundData(): Observable < User[] > {
        return this.httpMethodService.getMethodRequest(HTTP_URL.baseBackgroundUrl);
    }

    /**
     ** getStudentDataBasedOnDate method is use to 
     */
    getStudentDataBasedOnDate(fromDate: any, toDate: any): Observable < any > {
        return this.httpMethodService.getRequestWithFiveParameter(
            HTTP_URL.baseurl,
            HTTP_URL.fromDate,
            HTTP_URL.toDate,
            fromDate,
            toDate
        );
    }

    /**
     ** getFrameData method is use to 
     */
    getFrameData(): Observable < Array < this >> {
        return this.httpMethodService.getMethodRequest(HTTP_URL.frameDataUrl)
    }

    /**
     ** postFrameData method is use to 
     */
    postFrameData(frameInfo: object): Observable < object > {
        console.log(frameInfo);
        return this.httpMethodService.postMethodRequest(HTTP_URL.frameDataUrl, frameInfo)
    }

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
    getData2() {
        return this.http.get('http://localhost:3001/registration1')
            .map(this.extractData) //map as a middle-ware which transforms the response into json.. if we remove it the response comes into string format.
            .catch(this.handleErrorObservable);
    }
    getData() {
        return this.http.get('http://localhost:3000/registration1')
            .map(this.extractData) //map as a middle-ware which transforms the response into json.. if we remove it the response comes into string format.
            .catch(this.handleErrorObservable);
    }
    getDataUpdate() {
        return this.http.get('http://localhost:3000/registration2')
            .map(this.extractData) //map as a middle-ware which transforms the response into json.. if we remove it the response comes into string format.
            .catch(this.handleErrorObservable);
    }

    /**
     * 
     * @param productCode :get data based on productCode
     */
    get_Data(productCode): Observable < any > {
            return this.httpMethodService.getsingleuser(
                HTTP_URL.userurl,
                productCode
            );
        }
        /**
         ** getUser_data method is use to Get all user data and we will display that data inside the table
         */
    getUser_data(): Observable < any > {
            return this.httpMethodService.getMethodRequest_TogetUserData(HTTP_URL.userurl)
        }
        /**
         * update_user_data: method is use to update data 
         * @param studentinfo :object data
         * @param id :id name
         */
    update_user_data(productInfoData, productCodeId) {
        return this.httpMethodService.putMethodRequest_toupdateQty(HTTP_URL.userurl, productCodeId, productInfoData);
    }

    /**
     * 
     * Below code for All about for Grid Part in ANgular6
     * 
     */
    getGridRequestData() {
        return this.httpMethodService.getGridRequest();
    }
    postGridRequestData() {
        return this.httpMethodService.postGridRequest();
    }
    puttGridRequestData() {
        return this.httpMethodService.puttGridRequest();
    }
    deleteGridRequestData() {
        return this.httpMethodService.deleteGridRequest();
    }

    /**
     * 
     * Below code for All about for High-Chart Part in ANgular6
     * 
     */

    getChartRequestData() {
        return this.httpMethodService.getChartRequest();
    }
    postChartRequestData() {
        return this.httpMethodService.postChartRequest();
    }
    puttChartRequestData() {
        return this.httpMethodService.puttChartRequest();
    }
    deleteChartRequestData() {
        return this.httpMethodService.deleteChartRequest();
    }

    getProductData() {
        return this.http.get('http://localhost:3000/ProductDetails')
            .map(this.extractData) //map as a middle-ware which transforms the response into json.. if we remove it the response comes into string format.
            .catch(this.handleErrorObservable);
    }

    prodDetails(): Observable < prodDetails > {
        return this.http.get('http://localhost:3000/prodDetails')
            .map(this.extractData) //map as a middle-ware which transforms the response into json.. if we remove it the response comes into string format.
            .catch(this.handleErrorObservable);
    }

    /**
     * 
     * Confirmation Type Data
     */

    getConfirmationData() {
        return this.http.get('http://localhost:3000/confirmationsData')
            .map(this.extractData) //map as a middle-ware which transforms the response into json.. if we remove it the response comes into string format.
            .catch(this.handleErrorObservable);
    }

    transactionHistory() {
        return this.http.get('http://localhost:3000/data')
            .map(this.extractData) //map as a middle-ware which transforms the response into json.. if we remove it the response comes into string format.
            .catch(this.handleErrorObservable);
    }

    /**
     * Get nested Array Data
     */

    getNestedArray() {
        return this.http.get('http://localhost:3000/nestedArray')
            .map(this.extractData) //map as a middle-ware which transforms the response into json.. if we remove it the response comes into string format.
            .catch(this.handleErrorObservable);
    }

    /**************for select************************* */

    getselectArray(combinedData) {
        console.log('combinedData--', combinedData);
        let params = new HttpParams()
            .set('country', combinedData.cu)
            .set('state', combinedData.st)
        console.log('params---', params);
        return this.http.get('http://localhost:3000/ProductDetails', {
                params
            })
            .map(this.extractData) //map as a middle-ware which transforms the response into json.. if we remove it the response comes into string format.
            .catch(this.handleErrorObservable);
    }

    getselectArray2(combinedData) {
        console.log('combinedData--', combinedData);
        let params = new HttpParams()
            .set('country', combinedData.range)
            .set('state', combinedData.range2)
        console.log('params---', params);
        return this.http.get('http://localhost:3000/ProductDetails', {
                params
            })
            .map(this.extractData) //map as a middle-ware which transforms the response into json.. if we remove it the response comes into string format.
            .catch(this.handleErrorObservable);
    }

    getselectArray4(combinedData) {
        console.log('combinedData--', combinedData);
        let params = new HttpParams()
            .set('country', combinedData.country)
            .set('state', combinedData.state)
            .set('city', combinedData.city)
        console.log('params---', params);
        return this.http.get('http://localhost:3000/ProductDetails', {
                params
            })
            .map(this.extractData) //map as a middle-ware which transforms the response into json.. if we remove it the response comes into string format.
            .catch(this.handleErrorObservable);
    }

    postUsers(data: any) {
        console.log(data);
        let success = "Success Full Congrats"
        return success;
    }

}