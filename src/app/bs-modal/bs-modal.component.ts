import { Component, OnInit, Input  } from '@angular/core';
import {
  StudentService
  } from '../service/student.service';
@Component({
  selector: 'app-bs-modal',
  templateUrl: './bs-modal.component.html',
  styleUrls: ['./bs-modal.component.css']
})
export class BsModalComponent implements OnInit {

  @Input() name;

  constructor(public studentserviceService:StudentService) {}

  ngOnInit() {
  }
  openmodal(){
    alert('tyt');
  }

}
