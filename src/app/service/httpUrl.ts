import { environment } from "../../environments/environment";

/**
	** postMethodRequest method is use to post user details during registration and perform POST method request to post data.
	*/
export const HTTP_URL={
  userurl : environment.apiUrl +'userData/',
  baseurl : environment.apiUrl +'registration/',
  demobaseurl : environment.apiUrl +'details/',
  prodDetails : environment.apiUrl +'prodDetails/',
  incrementDetails : environment.apiUrl +'incrementDetails/',
 // baseurl : 'http://localhost:8002/studentRegistration',
  //baseurl : 'http://localhost:2611/studentRegistration',
  baseSearchUrl : 'https://api.cdnjs.com/libraries',
  baseCuntryUrl:environment.apiUrl +'countryData',
  baseColorurl : environment.apiUrl +'colorData',
  baseBorderhUrl :environment.apiUrl +'borderData',
  baseBackgroundUrl:environment.apiUrl +'backgroundData',
  frameDataUrl:environment.apiUrl +'frameData',
  queryCountryUrl : '?country=',
  queryStateUrl : '&state=',
  queryCityUrl : '&city=',
  queryUrl : '?search=',
  user_name:'?userName=',
  passward:'&pwd=',
  queryStartIndex : '?_start=',
  queryEndIndex : '&_end=',
  fromDate : '?currentDate=',
  toDate : '&currentDate=',
  searchName: '?firstName=',
   searchurl : 'http://localhost:2627/studentSearch',
  //loginAutourl : 'http://localhost:2640/loginAutho',
  //loginbaseurl : 'http://localhost:1111/api/checkLogin',
 // checkSession : 'http://localhost:1111/api/checkSession',

 /**
  * Below path use in case when we want to use same port for server and for front end and for that create proxy.conf.json
  * And define some code in proxy.conf.json page

 * Need when we run using same port.
 * When we set below code in header then there is one extra request (option request)for any 'GET,PUT,POST,DELETE'
 * and option request comes forst to check that any request 'GET,PUT,POST,DELETE' should be allow or not if we use different port
 * And if we use same port then there is no extra request comes before any  'GET,PUT,POST,DELETE'
 */
  
 loginbaseurl : '/api/checkLogin',
checkSession : '/api/checkSession',


}
//?userName=json-server&pwd=typicode  

//  /studentSearch