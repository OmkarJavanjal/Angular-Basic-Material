import { Component, OnInit, ViewChild,Input, Output, EventEmitter,ElementRef, OnChanges } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute, NavigationStart, NavigationError, NavigationCancel, RoutesRecognized  } from '@angular/router';

import {
  Subject
} from 'rxjs/Subject';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';
import { MainBoxComponent } from '../main-box/main-box.component';
import { StudentService } from '../service/student.service';
import { SharedServiceService } from '../service/shared-service.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent extends MainBoxComponent implements OnInit {

  public isCheck;

  constructor(private router: Router,    public sharedServiceService: SharedServiceService,
    public studentserviceService: StudentService , public elementRef:ElementRef,
    private activatedRoute: ActivatedRoute) {
      super(elementRef,sharedServiceService, studentserviceService);
     }

  ngOnInit() {
    /**
     * below codeis use to find current url
     */
    this.router.events.forEach((event) => {
      if(event instanceof NavigationStart) {
        console.log('event', event);
      }
      // NavigationEnd
      // NavigationCancel
      // NavigationError
      // RoutesRecognized
    });
    
  }
  isLoginCom(activatedRoute){
   console.log(activatedRoute);
    if(activatedRoute == '/'){
        return false;
      }
      return true;
    }
    callMethod(activatedRoute) {
      console.log('successfully executed.', activatedRoute);
      this.isCheck=this.isLoginCom(activatedRoute)
  }
  public options = [
		{ id: 100, name: 'Any', isCheck: true },
		{ id: 200, name: 'order 23',  isCheck: false },
		{ id: 300, name: 'order 33',  isCheck: false },
		{ id: 400, name: 'order 43',  isCheck: false }
    ];
    public optionsChecked=[];
    private searchUpdated: Subject<any> = new Subject<any>();
    currentMessage:any;
    results: any;
    @ViewChild(MainBoxComponent) mainBoxComponent;
    @Output() onFilter: EventEmitter<any> = new EventEmitter();
    updateCheckedOptions(option, event) {
      var index = this.optionsChecked.indexOf(event.target.value);
      this.searchUpdated.next(event.target.value); /** it is use to find the current changes value */
      // below is second methd
      if(index === -1){
        // val not found, pushing onto array
        this.optionsChecked.push(event.target.value);
      }else{
        // val is found, removing from array
        this.optionsChecked.splice(index,1);	  
      } 
      
      this.sharedServiceService.filterData(this.optionsChecked);
      this.sharedServiceService.filter(this.optionsChecked);
     }
}
