import {
    Component,
    OnInit
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
    StudentService
} from '../service/student.service';
import {
    ValidationService
} from '../service/validation.service';
import {
    Observable
} from 'rxjs/Observable';
import {
    Subject
} from 'rxjs/Subject';

/**
	** getValidatorErrorMessage method
	*/
@Component({
    selector: 'app-typeahead',
    templateUrl: './typeahead.component.html',
    styleUrls: ['./typeahead.component.css']
})
/**
	** getValidatorErrorMessage method
	*/
export class TypeaheadComponent implements OnInit {
/**
	** getValidatorErrorMessage method
	*/
    countryData = [];
    selected:any;
    states:any;
    /**
	** getValidatorErrorMessage method
	*/
    searchTerm$ = new Subject < string > ();
    /**
	** getValidatorErrorMessage method
	*/
    constructor(private router: Router, private activatedRoute: ActivatedRoute, 
        private titleService: Title,
        private studentserviceService: StudentService) {
            this.titleService.setTitle(activatedRoute.snapshot.routeConfig.path);
        }
/**
	** getValidatorErrorMessage method
	*/
    ngOnInit() {
        this.studentserviceService.searchCountryDetail(this.searchTerm$)
            .subscribe(response => {
                    this.countryData = response;
                },
                error => {
                    console.error("Error deleting food!" + error);
                    return Observable.throw(error);
                }
            );
    }

}