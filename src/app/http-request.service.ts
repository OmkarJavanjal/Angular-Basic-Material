import { Injectable } from '@angular/core';
import {Response, Headers, RequestOptions, URLSearchParams, Http} from '@angular/http';
import {HttpClientModule, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class HttpRequestService {

  constructor(private http: Http) { }
/**
 * 
 */
  getReviewerData() {
    return this.http.get('http://localhost:3000/registration2')
  }
  
/**
 * 
 */
  getSubmitterData() {
    return this.http.get('http://localhost:3000/registration2')
  }

}
