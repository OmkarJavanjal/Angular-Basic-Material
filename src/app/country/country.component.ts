import {
    Component,
    OnInit,
    
} from '@angular/core';
import {
    FormBuilder,
    FormGroup,
    Validators
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
    User
} from '../service/user';
import {
    countryDataType
} from '../service/user';
import {
    StudentService
} from '../service/student.service';
import {
    ValidationService
} from '../service/validation.service';
import {
    Observable
} from 'rxjs/Observable';
import * as _ from 'underscore';
import {
    PagerService
} from '../service/pager.service';

 /**pager variable is use to set the pager info*/
 
@Component({
    selector: 'app-country',
    templateUrl: './country.component.html',
    styleUrls: ['./country.component.css']
})
/**
     * A class representing a CountryComponent
     * @class  CountryComponent
     */
export class CountryComponent implements OnInit {
    /**countryData variable is use to store the as array data*/

    public itemData=[];
    countryData: any[];
    /**stateData variable is use to store the as array data*/
    stateData: any[];
    /**cityData variable is use to store the as array data*/
    cityData: any[];
    /**finalCSCData variable is use to set the message*/
    finalCSCData: any[];
    /**selectedState variable is use to stor the selected state Name*/
    selectedState: string;
    /**selectedCountry variable is use to store selected country name*/
    selectedCountry: string;
    /**selectedCity variable is use to store the selected city name*/
    selectedCity: string;
    /**pager variable is use to set the pager info*/
    pager: any = {};
    /**pagedItems variable is use to store pafe item details based ob pagging*/
    pagedItems: any[];
    /**allItems variable is use to store all country name*/
    allItems;
    /**
     ** Create a point.
     ** @param fb - this create instance of FormBuilder.
     ** @param router - this create instance of Router.
     ** @param activatedRoute - this create instance of ActivatedRoute.
     ** @param titleService - this create instance of Title.
     ** @param studentserviceService - this create instance of StudentService.
     ** @param pagerService - this create instance of pagerService.
    */
    constructor(private pagerService: PagerService, 
        // private router: Router,
        // private activatedRoute: ActivatedRoute,
       // private titleService: Title, 
        private studentserviceService: StudentService) {
           // this.titleService.setTitle(activatedRoute.snapshot.routeConfig.path);
        }
    /**
     ** getCountryData is use to load all country data
     */
getCountryData():void{
    this.studentserviceService.getCountryData()
    .subscribe(response => {
        console.log("Type OF Responce -- ",  typeof response);
            this.allItems = response;
            /** initialize to page 1 */
            this.setPage(1);
            this.setLimit( this.allItems);
        },
        error => {
            console.error("Error deleting food!" + error);
            return Observable.throw(error);
        }
    );
}
    
setLimit(data){
let limit =20;
data.forEach((element, i) => {
    if(i<limit){
         this.itemData.push(element);
    }
  });
  console.log('index', this.itemData);
}



    /**
     ** ngOnInit is use to call method on page load
     */
    ngOnInit() {
        /** this.setPage(1); */
       this.getCountryData();
    }
    /**
     ** setPage method
     ** @param page - page is variable which accept the number and is the number og page
     */
    setPage(page: number) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        /** get pager object from service */
        this.pager = this.pagerService.getPager(this.allItems.length, page);
        /** get current page of items
         this.countryData = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1); */
        this.studentserviceService.getCountryDataByLimit(this.pager.startIndex, this.pager.endIndex + 1)
            .subscribe(response => {
                    this.countryData = response;
                },
                error => {
                    console.error("Error deleting food!" + error);
                    return Observable.throw(error);
                }
            );
    }

/**
     ** onCountryChange method is use when we select any country from select option and use to get list of all state of selected country.
     ** @param selecteCountry is the selectrd country name
     */
    onCountryChange(selecteCountry:string) {
        console.log("Type OF selecteCountry -- ",  typeof selecteCountry);
        this.selectedCountry = selecteCountry;
        this.studentserviceService.getStateData(this.selectedCountry)
            .subscribe(response => {
                    this.stateData = response;
                },
                error => {
                    console.error("Error deleting food!" + error);
                    return Observable.throw(error);
                }
            );
    }
/**
     ** onStateChange method is use when we select any state based on selected country from select option and use to get list of all state of selected country.
     ** @param selecteCountry is the selected state name
     */
    onStateChange(selecteState:string) {
        console.log("Type OF selecteState -- ",  typeof selecteState);
        this.selectedState = selecteState;
        this.studentserviceService.getCityData(this.selectedCountry, this.selectedState)
            .subscribe(response => {
                    this.cityData = response;
                },
                error => {
                    console.error("Error deleting food!" + error);
                    return Observable.throw(error);
                }
            );
    }
/**
     ** onCityChange method is use when we select any city from select option based on selected country and state and use to get list of all city of selected state.
     ** @param selecteCity is the selectred selecteCity name
     */
    onCityChange(selecteCity:string) {
        this.selectedCity = selecteCity;
        this.studentserviceService.getFinalCSCData(this.selectedCountry, this.selectedState, this.selectedCity)
            .subscribe(response => {
                    this.finalCSCData = response;
                },
                error => {
                    console.error("Error deleting food!" + error);
                    return Observable.throw(error);
                }
            );
    }

}