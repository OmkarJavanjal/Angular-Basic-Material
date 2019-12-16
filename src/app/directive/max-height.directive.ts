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
    selector: '[appMaxHeight]'
})
/**
     * A class representing a MaxHeightDirective
     * @class  MaxHeightDirective - this class use for set max heigth on all element box
     */
export class MaxHeightDirective {
    /**
    ** maxHeight variable and type is number  is use to store the height of box element
    ** Initial we set the maxHeight value 0
    */   
    maxHeight: number = 0;
    /**
     ** appMaxHeight is the name of directive 
     ** appMaxHeight is the variable which accept string value only
    */
    @Input('appMaxHeight') appMaxHeight: string;
    /**
     ** @param elRef - this create instance of ElementRef.
     ** @param localStorageService - this create instance of LocalStorageService.
    */  
    constructor(
        public elRef: ElementRef,
        private localStorageService: LocalStorageService
    ) {}
 /**
     ** ngAfterViewInit is the the method which call when all  element is lodad.
     ** localStorageService.getMaxHeight() will be call when all  element is load to find the max Height value.
     */
    ngAfterViewInit(): void {
        
        this.localStorageService.getMaxHeight()
            .subscribe(maxHeight => {
                this.elRef.nativeElement.style.height = maxHeight + 'px';
            });
            
        this.localStorageService.addToArray(this.elRef.nativeElement.clientHeight);
    }
}
