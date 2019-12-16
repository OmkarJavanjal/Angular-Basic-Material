import {
    AfterViewInit, Component, ElementRef, OnInit, ViewChild, Output, EventEmitter, ViewChildren, QueryList,
    ContentChild
}
from '@angular/core';
import {
    FormBuilder,
    FormGroup,
    Validators
}
from '@angular/forms';
import {
    Router,
    NavigationEnd,
    ActivatedRoute
}
from '@angular/router';
import {
    Title
}
from '@angular/platform-browser';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import {
    StudentService
}
from '../service/student.service';
import {
    Subject
}
from 'rxjs/Subject';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';
import {
    Observable
}
from 'rxjs/Observable';
import {
    BehaviorSubject
}
from 'rxjs/BehaviorSubject';
import {
    ViewcolordirectiveDirective
}
from '../directive/viewcolordirective.directive';
import {
    PanedirectiveDirective
}
from '../directive/panedirective.directive';
import {
    BookdirectiveDirective
}
from '../directive/bookdirective.directive';
/**
 ** states array is use to load country data  into typeahead select option box
 */
@Component({
        selector: 'app-search-student',
        templateUrl: './search-student.component.html',
        styleUrls: ['./search-student.component.css']
    })
    /**
     * A class representing a SearchStudentComponent
     * @class  SearchStudentComponent
     */
export class SearchStudentComponent implements OnInit, AfterViewInit {

    navigateMain(): void {
        this.router.navigate(['/mainBox']);
    }

    showCpDelay: boolean = false;
    showCpIf: boolean = false;
    delayInSec: number = 2000;
    selected: any = '';

    writerName = 'Mahesh';
    latestBook = true;
    onChangeBook() {
        this.latestBook = (this.latestBook === true) ? false : true;
    }

    /**
     *  @ViewChildren :
     * 
     * 
     */
    @ViewChildren(PanedirectiveDirective) panes: QueryList < PanedirectiveDirective > ;
    alertsArr = [];
    shouldShow = false;
    show() {
        this.shouldShow = true;
    }

    /**
     * @ViewChild() can instantiate ElementRef corresponding to a given template reference variable
     * 
     * 
     */
    @ViewChild('name')
    private elName: ElementRef;

    @ViewChild('city')
    private elCity: ElementRef;

    /**
     * 
     * 
     * 
     */
    ngAfterViewInit() {
        this.elName.nativeElement.style.backgroundColor = 'red';
        this.elName.nativeElement.style.color = 'green';
        this.elCity.nativeElement.style.backgroundColor = 'cyan';
        this.elCity.nativeElement.style.color = 'red';

        this.alertsArr = this.panes.toArray();
        console.log(this.panes);

    }

    /**
     * 
     * @ViewChild() using Directive to get method of directive inside the components when we call another method in my component
     * 
     * ViewcolordirectiveDirective is the class name of the directive.
     */
    @ViewChild(ViewcolordirectiveDirective)
    private cpColorDirective: ViewcolordirectiveDirective;
    changeColor(color: string) {
        this.cpColorDirective.change(color);
    }

    /**
     ** results variable is use to store the object data
     */

    results: Object;
    /**
     ** results variable is use to store the object data
     */
    results2: Object;

    /**
     * Create a point.
     * @param router - this create instance of Router.
     * @param activatedRoute - this create instance of ActivatedRoute.
     * @param titleService - this create instance of Title.
     * @param studentserviceService - this create instance of StudentService.
     */
    constructor(
            //private activatedRoute: ActivatedRoute, 
            //private titleService: Title,
            private router: Router,
            private activatedRoute: ActivatedRoute,
            private studentserviceService: StudentService) {}
        /**
         ** ngOnInit method is use for inilization the value or load data at first time
         */
    messages: string;
    currentMessage: any;
    ngOnInit() {
        this.studentserviceService.currentMessage.subscribe(message => this.messages = message);

    }

    /**
     * 
     * 
     * 
     */
    messagesEmit: any;

    checkEvent(name) {
        this.studentserviceService.getUserDetail(name);

        this.studentserviceService.getupdatedUser().subscribe(message => this.messagesEmit = message)
    }

    /**
     **  @Output() - searchChangeEmitter is a instance of EventEmitter and use as custom event.
     */
    @Output() searchChangeEmitter: EventEmitter < any > = new EventEmitter < any > ();

    /**
     **  BehaviorSubject - searchUpdated is a instance of BehaviorSubject
     ** It needs an initial value as it must always return a value on subscription even if it hasn't received a next()
     */

    /**private searchUpdated = new BehaviorSubject(null);*/

    /**
     **  Subject<string> - searchUpdated is a instance of Subject<string> 
     **  It does not need an initial value
     **  searchUpdated has next() method to accecpt current value as observer
     */
    private searchUpdated: Subject < string > = new Subject < string > ();
    //private articleSub: Subscription;
    /**
     ** onSearchType method is use to to find current value whatever we enter inside the input text box.
     ** then pas this current value to searchProductDetail to get data based on passed value
     ** @param value - this accecpt current value whatever we pass inside the input text box
     */
    onSearchType(value) {
        /**
         * It is an object with the methods next(v), error(e), and complete(). 
         * To feed a new value to the Subject, just call next(theValue)
         * The subject next method is used to send messages to an observable which are then sent to all subscribers of that observable.
         * 
         */
        this.searchUpdated.next(value.target.value); /** it is use to find the current changes value */

        console.log('this.searchUpdated', this.searchUpdated);
        /**this.searchChangeEmitter = <any>this.searchUpdated.asObservable()*/
        /**
         *  Convert this.searchUpdated subject data into obserable so that we can subscribe it
         *  In addition you can get a observable from behavior subject using the asobservable() method on  subject.
         *  An observable can be created from both Regular and Behavior Subjects using subject.asobservable(). 
         */

        this.currentMessage = this.searchUpdated.asObservable();
        console.log(' this.currentMessage', this.currentMessage);
        this.currentMessage
            .debounceTime(500)
            .distinctUntilChanged()
            /**
             * The main difference between switchMap and other flattening operators is the cancelling effect. 
            On each emission the previous inner observable (the result of the function you supplied) is 
            cancelled and the new observable is subscribed. You can remember this by the phrase switch to a new observable
            So Switchmap is use to send latest value
             */
            .switchMap(term => this.studentserviceService.searchProductDetail(term)) //
            .subscribe(results => {
                this.results = results;
            });
    }
    ngOnDestroy() { //make sure component implements OnDestroy
        // this.articleSub.unsubscribe(); // always unsubscribe from persistent observables to avoid memory leaks
    }
    getAllPrimes(value) {
        let num = value.target.value;
        let primesList = this.getPrimesSieve(num)
    }

    getPrimes(value) {
        let i = 0;
        let j = 0;
        let sqrt = Math.sqrt(value);
        let results = 1;
        let totalIterations: number = 0;
        let startTime = new Date();
        let prime = true;
        for (i = 3; i < value; i += 2) {
            prime = true;
            for (j = 3; j <= sqrt; j += 2) {
                totalIterations += 1;
                if ((i % j) == 0 && j != i && i > j) {
                    prime = false;
                    break;
                }
            }
            if (prime) {
                results += 1;
            }
        }
        let endTime = new Date();
        let totalTimeTaken = (endTime.getTime() - startTime.getTime()) / 1000;
        console.log('Total time taken for ' + value + ' is : ' + totalTimeTaken)
        console.log('Total Prime Numbers: ', results);
        console.log('Total Iterations: ', totalIterations);
    }

    getPrimesSieve(value) {
            let i = 0;
            let j = 0;
            let array = [];
            let sqrt = Math.sqrt(value);
            let results = [];
            let startTime = new Date();
            let totalIterations: number = 0;
            for (i = 2; i < value; i++) {
                array[i] = true;
            }

            for (i = 2; i < value; i++) {
                totalIterations += 1;
                for (j = i * i; j < value; j += i) {
                    if (array[j]) {
                        array[j] = false;
                    }
                }
            }

            for (i = 2; i < value; i++) {
                if (array[i]) {
                    results.push(i);
                }
            }

            let endTime = new Date();
            let totalTimeTaken = (endTime.getTime() - startTime.getTime()) + 'ms';
            console.log('Total time taken for ' + value + ' is : ' + totalTimeTaken)
            console.log('Total Prime Numbers: ', results.length);
            console.log('Total Prime Numbers: ', results.length);
        }
        /**
         * If we will take 49 then squareroot is 7 it means 7 is largest number by 49 is completly divisiable
         * or below 7 or7 is number by which 49 is divisiable so we have to check for all number  only upto 7 that  number divide the 49 to check that 49 is prime number or not 
         * if we take example of 100 then squareroot is 10,it means 10 is largest number by which 100 is divisiable completly
         * or below 10 or 10 is number by which 100 is divisiable so we have to check for all number only upto 10 that number divide the 100 to check that 49 is prime number or not 
         * If a⋅b=N where 1<a≤b<N
         * N=ab≥a2⟺a2≤N
         * 
         * If a number n is not a prime, it can be factored into two factors a and b:
         * n = a*b
         * If both a and b were greater than the square root of n, a*b would be greater than n. 
         * So at least one of those factors must be less than or equal to the square root of n, and to check if n is prime,
         *  we only need to test for factors less than or equal to the square root.
         */

    /**
     **  Subject<string> - searchStudentUpdated is a instance of Subject<string> 
     **  It does not need an initial value
     **  searchStudentUpdated has next() method to accecpt current value as observer
     **  the Subject is also an Observer, and what observers can do? They can listen to Observables with the next(), error() and complete() methods.
     **  Observer — he has the next, error, and complete methods.
     **  the Subject is observing the interval observable. In simple words when you have new values let me know.
     **  We can subscribe to the Subject and we can manually trigger the next() method. 
     **  When you call the next() method every subscriber will get this value.(you can also trigger error() and complete())
     **  you can get an observable from behavior subject using the asobservable() method
     */
    private searchStudentUpdated: Subject < string > = new Subject < string > ();
    /**
     ** ngOnInit method is use for inilization the value or load data at first time
     */
    onkeyUps(event) {
        this.searchStudentUpdated.next(event.target.value);

        /**
         *  Convert this.searchUpdated subject data into obserable so that we can subscribe it
         *  In addition you can get a observable from behavior subject using the asobservable() method on  subject.
         *  An observable can be created from both Regular and Behavior Subjects using subject.asobservable(). 
         */
        this.searchStudentUpdated.asObservable()
            .debounceTime(500)
            .distinctUntilChanged()
            .switchMap(event => this.studentserviceService.searchProductDetail(event))
            .subscribe(results => {
                this.results2 = results;
            });
    }

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

}