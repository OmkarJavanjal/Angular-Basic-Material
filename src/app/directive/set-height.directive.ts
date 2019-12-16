import { Directive, ElementRef, Input, HostListener, HostBinding, Attribute } from '@angular/core';
import { LocalStorageService } from '../service/local-storage.service';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';
/**
    ** appSetHeight is same name as Directive Name which accept the value as string.
    */
@Directive({
    selector: '[appSetHeight]'
})
    /**
     * A class representing a SetHeightDirective
     * @class  SetHeightDirective 
     */
export class SetHeightDirective {
   /**
    ** appSetHeight is same name as Directive Name which accept the value as string.
    */
    @Input('appSetHeight') appSetHeight: string;
    /**
    ** heightBox is define as @input variable which accept the value as string.
    */
    @Input() heightBox: string;
    /**
    ** allMaxHeight is define as number variable which accept the value as number it accept all list of height.
    */
    allMaxHeight: number = 0;
     /**
     ** Create a point.
     ** @param elRef - this create instance of ElementRef.
     ** @param localStorageService - this create instance of localStorageService.
    */
    constructor(
        public elRef: ElementRef,
        private localStorageService: LocalStorageService
    ) { }
    /**
     ** ngAfterViewInit is method which are call when all elementand also child element  is load on page
     **  this.localStorageService.getAllMaxHeight() is use to get all max height and apply it on all element
    */
    ngAfterViewInit(): void {
        this.localStorageService.getAllMaxHeight()
            .subscribe(maxHeightObject => {
                if (maxHeightObject.heightFor === this.heightBox) {
                    this.elRef.nativeElement.style.height = maxHeightObject.maxHeight + 'px';
                }
            });
            
        this.localStorageService.addHeightToArray(this.elRef.nativeElement.clientHeight, this.heightBox);
///console.log('this.elRef.nativeElement.clientHeight',this.elRef.nativeElement);
    }

}
