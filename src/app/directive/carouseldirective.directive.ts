import { Directive, ElementRef, Input, HostListener, HostBinding, Attribute, AfterViewChecked, ViewChild,EventEmitter,Output  } from '@angular/core';
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
import {
  CarouselserviceService
} from '../service/carouselservice.service';

/**
     * A class representing a CarouseldirectiveDirective
     * @class  CarouseldirectiveDirective
     */

@Directive({
  selector: '[appCarouseldirective]'
})
  /**
     * A class representing a CarouseldirectiveDirective
     * @class  CarouseldirectiveDirective
     */
export class CarouseldirectiveDirective {
 /**
    ** finalOffSetLeft variable is use to store the final offsetLeft value
    ** marginleft variable is use to store the marginLeft value during slider
    ** lastChildOffSetvalue variable is use to store the last child offSet position value
    */
  finalOffSetLeft;
  /**
     * A class representing a CarouseldirectiveDirective
     */
  marginleft = 0;
  /**
     * A class representing a CarouseldirectiveDirective
     */
  lastChildOffSetvalue;
  /**
     * A class representing a CarouseldirectiveDirective
     */
  
  /**
     ** @param elRef - this create instance of ElementRef.
     ** @param carouselserviceService - this create instance of carouselserviceService.
    */

  constructor( public elRef: ElementRef,private carouselserviceService: CarouselserviceService) { };
  /**
     ** CarouseldirectiveDirective is the name of directive 
     ** customSubmit is the instance of EventEmitter
     ** customSubmit has emmit()
    */
  @Output('CarouseldirectiveDirective') customSubmit: EventEmitter<any> = new EventEmitter();
  /**
     ** carouselBox is the @Input variable which are use to stor the input value as string
    */
  @Input() carouselBox: string;
    /**
     ** ngAfterViewChecked is the the method which call when all child element is lodad of any particular elements.
     ** carouselserviceService.getSliderName() will be call when all child element is load.
     */
    ngAfterViewChecked() {    
      /**
     ** @HostListener use click  method which call customSubmit.emit();
     */
    this.carouselserviceService.getSliderName()
            .subscribe(sliderObject => {
                if (sliderObject.carouselBox === this.carouselBox) {
                  let childObj = this.elRef.nativeElement.children; 
                   this.childObjOffSet(childObj);
                }
            });
        this.carouselserviceService.addSliderName(this.carouselBox);   
     }

    /**
     ** @HostListener use click  method which call customSubmit.emit();
     */
     @HostListener('click') onClick() {
       this.customSubmit.emit();
     }
     /**
     ** @HostListener use mouseleave method which call  this.nextArrow();
     */
     @HostListener('mouseleave') OnMouseLeave() {
      this.nextArrow();
    }
    /**
     ** @HostListener use click  method which call this.prevArrow();
     */
    @HostListener('click') OnClick() {
      this.prevArrow();
    }
    /**
     ** childObjOffSet is the method which are use to check the offSet value of all child Object
     ** @param childObj - it is the childObj which contain the list of all child object
     */
 private childObjOffSet(childObj) {
      for (let key in childObj) {
        if (childObj.hasOwnProperty(key)) {
            let lastIndex = (childObj.length - 1).toString();
            let prvIndex = parseInt(key);
            let nextIndex = prvIndex + 1;
            let finalIndex = nextIndex.toString();
            if (childObj[nextIndex] && childObj[prvIndex]) {
                this.finalOffSetLeft = childObj[nextIndex].offsetLeft - childObj[prvIndex].offsetLeft;
                this.lastChildOffSetvalue = childObj[lastIndex].offsetLeft;
                //console.log('this.finalOffSetLeft ', this.finalOffSetLeft);
            }
        }
      }
     }
    /**
     ** nextArrow is the method which are use to move the slider the from right to left.
     ** nextArrow method will be called when we click on right arrow
     */
   nextArrow() {
    let marginOffsetApplied = parseInt(this.elRef.nativeElement.style.marginLeft.replace('px', ''), 10) || 0;
    let scrollableWidth = this.elRef.nativeElement.offsetWidth;
    let parentWidth = this.elRef.nativeElement.offsetParent.offsetWidth;
    if ((scrollableWidth - parentWidth) > (-1 * marginOffsetApplied)) {
      this.marginleft += this.finalOffSetLeft;
      this.elRef.nativeElement.style.marginLeft = -this.marginleft + 'px';
      console.log( this.elRef.nativeElement.style.marginLeft);
      }
    else {
      return;
    }
  }
  /**
     ** prevArrow is the method which are use to move the slider the from left to right.
     ** prevArrow method will be called when we click on left arrow
     */

   prevArrow() {
    if (this.marginleft != 0) {
      this.marginleft -= this.finalOffSetLeft;
      this.elRef.nativeElement.style.marginLeft = -this.marginleft + 'px';
      } else {
          return;
      }
  }



}
