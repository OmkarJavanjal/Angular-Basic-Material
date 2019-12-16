import { StockchangeComponent } from './../stockchange/stockchange.component';
import { Component, OnInit, ViewChild} from '@angular/core';
import { SharedServiceService } from '../service/shared-service.service';
@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit {

  
  @ViewChild('dateRangePicker') dateRangePicker;

  constructor(public sharedServiceService: SharedServiceService) {}

  ngOnInit() {
    this.sharedServiceService.setShareInputElm(this.dateRangePicker);
  }

  addmethod(){
    console.log('this method is comming from date-picker component');
  }
}
