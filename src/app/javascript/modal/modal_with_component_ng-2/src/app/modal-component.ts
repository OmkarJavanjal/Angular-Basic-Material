import { Component,Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-content',
  templateUrl: './modal-component.html'
})
export class NgbdModalContent {
  public studenData:any;
  @Input() data;
  @Input () name;
  constructor(public activeModal: NgbActiveModal) {}
   ngOnInit() {
     if(this.data){
       this.studenData = this.data;
       console.log(this.studenData);
     }
  }

}

