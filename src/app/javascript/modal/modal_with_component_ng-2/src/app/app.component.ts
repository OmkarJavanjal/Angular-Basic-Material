import { Component,Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {NgbdModalContent } from './modal-component';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public data =[{
    "firstName":"Abhinav",
    "lastName":"Singh"
      },{
    "firstName":"Ravi",
    "lastName":"Kumar"
  }];
  constructor(private modalService: NgbModal) {}
 ngOnInit() {
  }

  open() {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.name = 'World Abhinav';
     modalRef.componentInstance.data = this.data;
  }
}
