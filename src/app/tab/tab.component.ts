import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { SharedServiceService } from '../service/shared-service.service';
@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {
  constructor(public sharedServiceService: SharedServiceService) { }
  public view;
  ngOnInit() {
    this.sharedServiceService.listenTitle().subscribe(shareTitle => this.view = shareTitle);
  }
  
  getSomeClass(item){
    this.sharedServiceService.filterTitle(item); 
  }
}
