import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, NavigationEnd, ActivatedRoute, Params } from '@angular/router';
import { Title } from '@angular/platform-browser';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import { User } from '../service/user';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';
import { StudentService } from '../service/student.service';
import { Location } from '@angular/common';
/**
	** First line
	*/
@Component({
	selector: 'app-student-update',
	templateUrl: './student-update.component.html',
	styleUrls: ['./student-update.component.css']
})
export class StudentUpdateComponent implements OnInit {
	/**
		 ** First line
		*/
	studentDetailList: any;
	/**
	 ** First line
	*/
	updateForm: FormGroup;
	/**
	 ** First line
	*/
	genderList: string[];
	/**
	 ** First line
	*/
	private user: User
	/**
	 ** First line
	*/
	isUpdate: boolean = false;
	/**
	 ** First line
	*/
	params: number;

	/**
	   ** First line
	   */
	errorstags = ['firstName', 'lastName', 'userName', 'email', 'mobile', 'gender'];
	/**
		** First line
		*/

	constructor(
		private _location: Location,
		private fb: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute,
		private titleService: Title, private studentserviceService: StudentService) {
		console.log('activatedRoute.snapshot', activatedRoute.snapshot);

		/** TO check current route param name */
		console.log(activatedRoute.snapshot.url[0].path + '/' + activatedRoute.snapshot.url[1].path);
		this.titleService.setTitle(activatedRoute.snapshot.url[0].path + '/' + activatedRoute.snapshot.url[1].path);
		/** TO check current rout path */
		console.log('activatedRoute.snapshot.routeConfig.path', activatedRoute.snapshot);
		if (activatedRoute.snapshot.url[0].path + '/' + activatedRoute.snapshot.url[1].path == 'renewal/review') {

		}

	}
		/**
		 * Page navigat
		*/
		clickme() {
			alert('fdf');
		}
		/**
		** First line
		*/
		ngOnInit() {
		this.getUserDetailsData();
		/**
			** First line
			*/
		this.genderList = ['Male', 'Female', 'Others'];
		/**
			** First line
			*/
		this.params = this.activatedRoute.snapshot.params['id'];
		/**
			** First line
			*/
		this.getSingleStudentList(this.params);
		/**
			** First line
			*/
		this.updateForm = this.fb.group({
			firstName: ['', Validators.required],
			lastName: ['', Validators.required],
			userName: ['', Validators.required],
			email: ['', [Validators.required,
			Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
			mobile: ['', Validators.required],
			gender: ['', Validators.required]
		})
	}
	/**
	 ** First line
	*/
	getSingleStudentList(para) {
		this.studentserviceService.getSingleStudentDetail(para)
			.subscribe(
			data => { this.studentDetailList = data }
			);
	}
	/**
   	 ** getStudentsDetalis method
	*/
	userDataUpdated: any;
	/**
	 * 
	 * 
	 */
	getSingleUserDetailsData(productCode) {
		this.studentserviceService.get_Data(productCode)
			.subscribe(
			data => {
				this.userDataUpdated = data;
			}
			);
	}
	/**
	 * 
	 * 
	 */
	getUserDetailsData() {
		this.studentserviceService.getUser_data()
			.subscribe(
			data => {
				this.userDataUpdated = data;
			}
			);
	}
	/**
	 * 
	 * 
	 */
	changeQty(studentinfoData: object, productCode) {
		this.studentserviceService.update_user_data(studentinfoData, productCode)
			.subscribe(
			data => {
				this.getUserDetailsData()
			}
			);
     	}

	/**
	 * 
	 * 
	 */
	decreaseNumber(productInfoData:object) {		
		if(productInfoData['minQuantity']==1){
			productInfoData['isminQuantity']=true;
		}else{

		if(productInfoData['minQuantity']===productInfoData['incrementBy']){
			productInfoData['minQuantity'] -= productInfoData['incrementBy']-1;
		}else{
			productInfoData['minQuantity'] -= productInfoData['incrementBy'];
		}
		productInfoData['totalPrice'] = productInfoData['price']*productInfoData['minQuantity'];
			productInfoData['ismaxQuantity']=false;
		}	
		let bodyObj = productInfoData;
		this.changeQty(bodyObj, productInfoData['id']);
	}
	/**
	 * let bodyObj = {
      userId: 1,
      id: 1,
      title: "new title",
      body: "new body"
    };
	 * 
	 */
	increaseNumber(productInfoData: object) {	
		if((productInfoData['minQuantity']+productInfoData['incrementBy'])<=productInfoData['maxQuantity']){

			if(productInfoData['minQuantity']<productInfoData['incrementBy']){
				productInfoData['minQuantity'] += productInfoData['incrementBy']-1;
			}else{
				productInfoData['minQuantity'] += productInfoData['incrementBy'];
			}		  	
			  productInfoData['totalPrice'] = productInfoData['price']*productInfoData['minQuantity'];						
		}else{
			productInfoData['ismaxQuantity']=true;
		}		
		let bodyObj = productInfoData;
		this.changeQty(bodyObj, productInfoData['id']);
	}	
	/**
		** First line
		*/
	onUpdateStudentDetail() {
		for (let i = 0; i < this.errorstags.length; i++) {
			//this.updateForm.controls[this.errorstags[i]].pristine = false;
			//console.log(this.updateForm.controls[errorstags[i]]);
			//console.log(this.updateForm.controls[this.errorstags[i]].pristine);			
			if (this.updateForm.controls[this.errorstags[i]].pristine == false) {
				//console.log(this.updateForm.controls[this.errorstags[i]]);
				//console.log(this.updateForm.value);
				//this.user[this.errorstags[i]]=this.updateForm.controls[this.errorstags[i]].value;
				//console.log(this.user[this.errorstags[i]]);
				//console.log(this.user);				
			}
		}
		if (confirm("Are you sure you want to Update " + this.params + "?")) {
			this.user = this.updateForm.value;
			this.user.password = {
				"pwd": this.studentDetailList.password.pwd,
				"confirmPwd": this.studentDetailList.password.confirmPwd
			}
			this.studentserviceService.updateStudentdData(this.updateForm.value, this.params)
				.subscribe(response => {
				},
				error => {
					console.error("Error deleting food!");
					return Observable.throw(error);
				}
				);
			setTimeout(() => {
				this.isUpdate = true;
				setTimeout(() => {
					this.router.navigate(['./detail']);

				}, 8000);
			}, 2000);
		}
	}
	/**
	 * Move on previous Page
	 */
	prevPage() {
		//	this._location.back();
		window.history.back();
	}


	/**
	 * 
	 * 
	 * 
	 */


}
