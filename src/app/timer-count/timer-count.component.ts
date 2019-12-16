import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';
/**
	** getValidatorErrorMessage method
	*/
@Component({
  selector: 'app-timer-count',
  templateUrl: './timer-count.component.html',
  styleUrls: ['./timer-count.component.css']
})
/**
	** getValidatorErrorMessage method
	*/
export class TimerCountComponent implements OnInit {
/**
	** getValidatorErrorMessage method
	*/
  constructor() { }
/**
	** getValidatorErrorMessage method
	*/
  ticks = 0;
    /**
	** getValidatorErrorMessage method
	*/
    minutesDisplay: number = 0;
    /**
	** getValidatorErrorMessage method
	*/
    hoursDisplay: number = 0;
    /**
	** getValidatorErrorMessage method
	*/
    secondsDisplay: number = 0;
    /**
	** getValidatorErrorMessage method
	*/

    sub: Subscription;
    /**
	** getValidatorErrorMessage method
	*/

    ngOnInit() {
        this.startTimer();
    }
/**
	** getValidatorErrorMessage method
	*/
    private startTimer() {

        let timer = Observable.timer(1, 1000);
        this.sub = timer.subscribe(
            t => {
                this.ticks = t;              
                this.secondsDisplay = this.getSeconds(this.ticks);
                this.minutesDisplay = this.getMinutes(this.ticks);
                this.hoursDisplay = this.getHours(this.ticks);
            }
        );
    }
/**
	** getValidatorErrorMessage method
	*/
    private getSeconds(ticks: number) {
        return this.pad(ticks % 60);
    }
/**
	** getValidatorErrorMessage method
	*/
    private getMinutes(ticks: number) {
         return this.pad((Math.floor(ticks / 60)) % 60);
    }
/**
	** getValidatorErrorMessage method
	*/
    private getHours(ticks: number) {
        return this.pad(Math.floor((ticks / 60) / 60));
    }
/**
	** getValidatorErrorMessage method
	*/
    private pad(digit: any) { 
        return digit <= 9 ? '0' + digit : digit;
    }

}
