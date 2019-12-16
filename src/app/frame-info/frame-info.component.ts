import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import { User } from '../service/user';
import { StudentService } from '../service/student.service';
import { ValidationService } from '../service/validation.service';
import { Observable } from 'rxjs/Observable';
/**
     * A class representing a ControlMessagesComponent
     * @class  ControlMessagesComponent
     */
@Component({
  selector: 'app-frame-info',
  templateUrl: './frame-info.component.html',
  styleUrls: ['./frame-info.component.css']
})
	/**
     * A class representing a CarouseldirectiveDirective
     * @class  CarouseldirectiveDirective
     */
export class FrameInfoComponent implements OnInit {
	/**
    ** frameData variable is use to store the info of frame data as array data
    */
frameData=[];
helperArray=[];
employees=[];
public isEditable:boolean=true;
public isSavetable:boolean=false;
PayDate:any='';
NotifyDate:any='';
PayAmount:any='';
PayType:any='';
history:any='';
payTypes:any;
	/**
     ** Create a point.
     ** @param fb - this create instance of FormBuilder.
     ** @param router - this create instance of Router.
     ** @param activatedRoute - this create instance of ActivatedRoute.
     ** @param titleService - this create instance of Title.
     ** @param studentserviceService - this create instance of StudentService.
    */
	constructor(private fb:FormBuilder,private router: Router, 
		private activatedRoute: ActivatedRoute, private titleService: Title, 
		private studentserviceService: StudentService) { 
      this.titleService.setTitle(activatedRoute.snapshot.routeConfig.path);
    }
	  /**
     ** ngOnInit method is use to call studentserviceService.getFrameData() when page is load
     */
    
  ngOnInit() {
    this.payTypes=[{'card':'Debit Card'},{'card':'Crdit Card'}];
    this.employees=[{'PayDate':"DD/MM/YYY",'NotifyDate':"DD/MM/YYY",'PayAmount':"200",'PayType':"Credit",'history':"Y"}];
    
   // this.helperArray=[1,2,3,4];
    this.repeaterow(8);
	  this.studentserviceService.getFrameData()
			.subscribe(response => {
				 this.frameData = response;			 
				},
				 error => {
				   console.error("Error deleting food!" + error);
				   return Observable.throw(error);
				 }
				);
  }
  repeaterow(count){
    for (var i = 0; i < count; i++) {
      this.helperArray.push(i);
    }
  }
  deleterow(event){
     console.log('event',event);
  }

  saveTable(){
  this.isEditable=false;
  this.isSavetable=true;
    console.log('save', this.isEditable);

    this.employees[0]['PayDate']=this.PayDate;
    this.employees[0]['NotifyDate']=this.NotifyDate;
    this.employees[0]['PayAmount']=this.PayAmount;
    this.employees[0]['PayType']=this.PayType;
    this.employees[0]['history']=this.history;
    console.log('ss',this.employees);
  }
  editTable(){
  this.isEditable=true;
  this.isSavetable=false;
    console.log('editTable', this.isSavetable);
  }
  onPayTypeChange(event){
    console.log('event', event);
    this.PayType=event;
  }
  return(){
    alert('Hi');
  }
}
