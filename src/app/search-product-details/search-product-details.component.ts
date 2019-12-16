import {
    Component,
    OnInit,
	Output,EventEmitter
} from '@angular/core';
import {
    FormBuilder,
    FormGroup,
    Validators,
    FormControl
} from '@angular/forms';
import {
    Router,
    NavigationEnd,
    ActivatedRoute
} from '@angular/router';
import {
    Title
} from '@angular/platform-browser';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import {
    StudentService
} from '../service/student.service';
import {
    Subject
} from 'rxjs/Subject'
import 'rxjs/add/operator/catch';
import {
    Observable
} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';
 /**
     * A class representing a SearchProductDetailsComponent
     * @class  SearchProductDetailsComponent
     */
@Component({
    selector: 'app-search-product-details',
    templateUrl: './search-product-details.component.html',
    styleUrls: ['./search-product-details.component.css']
})
    /**
     * A class representing a SearchProductDetailsComponent
     * @class  SearchProductDetailsComponent
     */
export class SearchProductDetailsComponent implements OnInit {
    /**
     * Create a point.
     * @param titleService - this create instance of Title.
     * @param studentserviceService - this create instance of StudentService.
    */
    constructor(private studentserviceService: StudentService) {}
    /**
     ** ngOnInit method is use for inilization the value or load data at first time
    */   
    ngOnInit() {}
    
    /**
     ** product variable is use to store the object data
    */
    product: Object;
    selected:any='';
    /**
     ** states array is use to load country data  into typeahead select option box
     */ 
    states: string[] = [
        'Afghanistan',
        'Angola',
        'Anguilla',
        'Antarctica',
        'Antigua and Barbuda',
        'Argentina'  
    ];
    
    /**
     **  @Output() - searchProductEmitter is a instance of EventEmitter and use as custom event.
     */	

     @Output() searchProductEmitter: EventEmitter<any> = new EventEmitter<any>(); 

    /**
     **  Subject<string> - searchProductUpdated is a instance of Subject<string> 
     **  It does not need an initial value
     **  searchProductUpdated has next() method to accecpt current value as observer
     **  the Subject is also an Observer, and what observers can do? They can listen to Observables with the next(), error() and complete() methods.
     **  Observer — he has the next, error, and complete methods.
     **  the Subject is observing the interval observable. In simple words when you have new values let me know.
     **  We can subscribe to the Subject and we can manually trigger the next() method. 
     **  When you call the next() method every subscriber will get this value.(you can also trigger error() and complete())
     **  you can get an observable from behavior subject using the asobservable() method
     */

     private searchProductUpdated: Subject<string> = new Subject<string>();

     /**
      * https://stackoverflow.com/questions/41308826/angular-2-debounce-ngmodelchange
      * https://stackoverflow.com/questions/41308826/angular-2-debounce-ngmodelchange
      * https://stackblitz.com/edit/typescript-dzjbra?file=index.ts&devtoolsheight=100
     ** onSearchTypes method is use to to find current value whatever we enter inside the input text box.
     ** then pas this current value to searchProductDetail to get data based on passed value
     ** @param value - this accecpt current value whatever we pass inside the input text box
     */	
onSearchTypes(event){
	 this.searchProductUpdated.next(event.target.value); 
   this.searchProductEmitter = <any>this.searchProductUpdated.asObservable()
    .debounceTime(500)
    .distinctUntilChanged()
    .switchMap(event=> this.studentserviceService.searchProductDetail(event))
    .subscribe(results => {
                this.product = results;
            });
    }

}