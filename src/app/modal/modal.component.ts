import { Component, TemplateRef, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import {
  StudentService
  } from '../service/student.service';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor( public bsModalRef: BsModalRef) { }
  title: string;
  closeBtnName: string;
  list: any[] = [];
 
  ngOnInit() {
    this.list.push('PROFIT!!!');
  }
  
}
