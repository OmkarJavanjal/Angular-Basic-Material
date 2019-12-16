import { Component, OnInit, TemplateRef , ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import { User } from '../service/user';
import { StudentService } from '../service/student.service';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
/**
	** getValidatorErrorMessage method
	*/
@Component({
  selector: 'app-modalcomponent',
  templateUrl: './modalcomponent.component.html',
  styleUrls: ['./modalcomponent.component.css']
})
/**
	** getValidatorErrorMessage method
	*/
export class ModalcomponentComponent implements OnInit {
/**
	** getValidatorErrorMessage method
	*/
  constructor() { }
/**
	** getValidatorErrorMessage method
	*/
  ngOnInit() {
  }

}
