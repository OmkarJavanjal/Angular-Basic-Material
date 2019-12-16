import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import { User } from '../service/user';
import { StudentService } from '../service/student.service';
import { Observable } from 'rxjs/Observable';
import { LocalStorageService } from '../service/local-storage.service';

/**
     * A class representing a StudentLoginComponent
     * @class  StudentLoginComponent
     */

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css']
})
	/**
     * A class representing a StudentLoginComponent
     * @class  StudentLoginComponent
     */
export class StudentLoginComponent implements OnInit {
 /**
    ** isSuccessLogin variable is use as flag to store boolean value
    ** signInForm variable is use to store the all info data from the user login details
    ** user variable is use interface which include the object structure of user form details
    */
 /**  */
 isSuccessLogin : boolean = false;
 signInForm: FormGroup;
 /**
     * A class representing a StudentLoginComponent
     * @class  StudentLoginComponent
     */
 private user:User;
  public isCheck;
 /**
     ** Create a point.
     ** @param fb - this create instance of FormBuilder.
     ** @param router - this create instance of Router.
     ** @param activatedRoute - this create instance of ActivatedRoute.
     ** @param titleService - this create instance of Title.
     ** @param studentserviceService - this create instance of StudentService.
     ** @param localStorageService - this create instance of localStorageService.
    */
 constructor(private localStorageService:LocalStorageService, private fb:FormBuilder,private router: Router, 
	private activatedRoute: ActivatedRoute, private titleService: Title, 
	private studentserviceService: StudentService) {
    this.titleService.setTitle(activatedRoute.snapshot.routeConfig.path);
   }

/**
     ** ngOnInit is use to call method on page load
     */
  ngOnInit() {
	/**
     ** signInForm is use to set the all input user details for login
     */
	this.signInForm  = this.fb.group({
		userName: ['', Validators.required],
		pwd: ['', Validators.required]	
    })
    
    console.log('activatedRoute.snapshot.routeConfig.path', this.activatedRoute.snapshot.routeConfig.path);
 this.isCheck=this.isLoginCom(this.activatedRoute.snapshot.url.length);
  console.log(this.isCheck);
  }

  isLoginCom(activatedRoute){
  console.log(activatedRoute);
  if(activatedRoute == 0){
      return false;
    }
    return true;
  }
  /**
	 ** onFormSignIn is method  which call when user click on login button.
	 ** this.studentserviceService.sendLoginStudentdData service will be call and us user name and user user pass for login
     */
 /** public onFormSignIn() {		
		this.studentserviceService.sendLoginStudentdData(this.signInForm.value.userName, this.signInForm.value.pwd)
		.subscribe(response => {
					 if((response.length!=0)&&(response[0].userName== this.signInForm.value.userName)){
						 /** this.isSuccessLogin=true;
						     this.localStorageService.setLocalStorageData('isSuccessLogin', this.isSuccessLogin); */
						  /**setTimeout(() => {																
								this.localStorageService.setLocalStorageData('claims', response);
								setTimeout(() => {																							
								this.router.navigate(['./loggedin']);								
							}, 4000);
							}, 2000);
					  }
					 else{ 
						 alert('Bad Abhinav');
					 }
	              },
				 error => {
				   return Observable.throw(error);
				 }
				);										
  };*/
  

/**
 * onFormSignInCheck() method use to follow the expressJs server code
 * 
 */
  public onFormSignInCheck() {		
    this.studentserviceService.sendStudentdLoginData(this.signInForm.value)
		.subscribe(response => {
      console.log('response--- ', response);
      if(response.isLogin){
                 setTimeout(() => {																
                  this.localStorageService.setLocalStorageData('logdinUser', response);
                  this.localStorageService.setLocalStorageData('expires', response.isLogin);  
                  this.localStorageService.setLocalStorageData('isToken', response.token);            
                  setTimeout(() => {																							
                  this.router.navigate(['./registration']);								
                }, 4000);
                }, 2000);
        }else{ 
          this.router.navigate(['./login']);
        }
      },
    error => {
    return Observable.throw(error);
    }
	);										
	}
}
