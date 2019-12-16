import { Input, ElementRef } from '@angular/core';
//import { DatePickerComponent } from './../date-picker/date-picker.component';

import { LoadScriptsService } from './../services/load-scripts.service';
import { ViewChild,Component, OnInit, OnChanges, SimpleChanges, AfterContentInit, AfterContentChecked } from '@angular/core';
import { SharedServiceService } from '../service/shared-service.service';
//import { StockshareComponent } from '../stockshare/Stockshare.component';
import { DatePickerComponent } from '../date-picker/date-picker.component';
declare var jQuery: any;
declare var $: any;

@Component({
    selector: 'app-stockchange',
    templateUrl: './stockchange.component.html',
    styleUrls: ['./stockchange.component.css']
})
export class StockchangeComponent extends DatePickerComponent implements OnInit {
    selectedRange: any;
    dateRangePicker:any;
    constructor(
        public sharedServiceService: SharedServiceService
    ) {
       super(sharedServiceService);
     }
     @ViewChild(DatePickerComponent) datePickerComponent;
   
   momentReady (elem: HTMLElement, evt: Event) {
   console.log(' this.datePickerComponent.dateInput;',  this.datePickerComponent);
        LoadScriptsService.loadScript('http://cdnjs.cloudflare.com/ajax/libs/bootstrap-daterangepicker/3.0.3/daterangepicker.js', function (elem: HTMLElement, evt: Event) {
               $('input[name="datebaseRange"]').daterangepicker({
                opens: 'left'
                }, function(start, end, label) {
                console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));           
            });
                
        });
    };
    ngOnInit() {
        /**
         * How to get element name form another component
         */
        this.sharedServiceService.getShareInputElm.subscribe(shareData =>
              {
                this.dateRangePicker = shareData;
                console.log('this.dateRangePicker----', this.dateRangePicker.nativeElement);
              }
            
            );
      
        LoadScriptsService.loadScript('http://cdn.jsdelivr.net/momentjs/latest/moment.min.js', this.momentReady);
    }
    addTodateRange(date) {
        var splitDate=date.split("-");
        var startDateArray=splitDate[0].split("/");
        var startDate=startDateArray[2]+'-'+startDateArray[0]+'-'+startDateArray[1];
        var endDateArray=splitDate[1].split("/");
        var endDate=endDateArray[2]+'-'+endDateArray[0]+'-'+endDateArray[1];  // The dates for the date filter model are always serialised and expected to be a string with the format yyyy-mm-dd           
       var salectedDate={
           "startDate":startDate,
           "endDate":endDate,
       }
        this.selectedRange=salectedDate;
      }

    

        
      
     


}