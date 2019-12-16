import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../service/local-storage.service';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Observable, Subscription } from 'rxjs/Rx';
import { StudentService } from '../service/student.service';
/**
    * A class representing a SearchProductDetailsComponent
    * @class  SearchProductDetailsComponent
    */
@Component({
    selector: 'app-logdin-user-detail',
    templateUrl: './logdin-user-detail.component.html',
    styleUrls: ['./logdin-user-detail.component.css']
})
/**
    * A class representing a SearchProductDetailsComponent
    * @class  SearchProductDetailsComponent
    */
export class LogdinUserDetailComponent implements OnInit {
    /**
    * A class representing a SearchProductDetailsComponent
    */
    userDetailss: any;
    expiresTimes: any;
    /**
     * A class representing a SearchProductDetailsComponent
     */
    ticks = 0;
    /**
     * A class representing a SearchProductDetailsComponent
     */
    minutesDisplay: number = 0;
    /**
     * A class representing a SearchProductDetailsComponent
     */
    hoursDisplay: number = 0;
    /**
     * A class representing a SearchProductDetailsComponent
     */
    secondsDisplay: number = 0;
    /**
     * A class representing a SearchProductDetailsComponent
     */
    sub: Subscription;
    /**
     * A class representing a SearchProductDetailsComponent
     */
    timer = Observable.timer(1, 1000);
    /**
        ** constructor method
        */
    constructor(private localStorageService: LocalStorageService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private studentserviceService: StudentService,
        private titleService: Title) {
        this.titleService.setTitle(activatedRoute.snapshot.routeConfig.path);
    }
    /**
        ** ngOnInit method
        */
    ngOnInit() {
        this.startTimer();
        this.userDetailss = this.localStorageService.getLocalStorageData('logdinUser');
        this.expiresTimes = this.localStorageService.getLocalStorageData('expiresTime');
        setTimeout(() => {
            //this.localStorageService.removeLocalStorageData('logdinUser');
           /// this.unsubscribeTimer();
            setTimeout(() => {
                //this.router.navigate(['./logout']);					
            }, 4000);
        }, 9000);
    }

    /**
     * 
     * @param evt :check each click of any user and based on that apply apply session condition
     * 
     */
    fireGetRequest (evt) {
        this.studentserviceService.fireGetRequest()
            .subscribe(response => {
                console.log(response);
            }, error => {
                return Observable.throw(error);
            });
       }

       navigate () {
        this.router.navigate(['./searchChild']);
       }

    private startTimer() {
        this.sub = this.timer.subscribe(
            t => {
                this.ticks = t;
                this.secondsDisplay = this.getSeconds(this.ticks);
                this.minutesDisplay = this.getMinutes(this.ticks);
                this.hoursDisplay = this.getHours(this.ticks);
            }
        );
    }
    /**
        ** unsubscribeTimer method
        */
    unsubscribeTimer() {
        this.sub.unsubscribe();
    }
    /**
        ** getSeconds method
        */
    private getSeconds(ticks: number) {
        return this.pad(ticks % 60);
    }
    /**
        ** getMinutes method
        */
    private getMinutes(ticks: number) {
        return this.pad((Math.floor(ticks / 60)) % 60);
    }
    /**
        ** getHours method
        */
    private getHours(ticks: number) {
        return this.pad(Math.floor((ticks / 60) / 60));
    }
    /**
        ** pad method
        */
    private pad(digit: any) {
        return digit <= 9 ? '0' + digit : digit;
    }

}
