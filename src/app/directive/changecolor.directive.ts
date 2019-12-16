import {  Directive, ElementRef, Input,HostListener,HostBinding } from '@angular/core';
/**
     * A class representing a ChangecolorDirective
     * @class  ChangecolorDirective
     */
@Directive({
  selector: '[appChangecolor]'
})
  /**
     * A class representing a ChangecolorDirective
     * @class  ChangecolorDirective
     */
export class ChangecolorDirective {
    /**
     ** @param elRef - this create instance of ElementRef.
    */
  constructor(public elRef: ElementRef) { }
  /**
     ** tcolor is the @Input variable which are use to stor the input value as string
    */
   @Input() tcolor: string; 

   /**
     ** ngAfterViewInit is the the method which call when all html element is load
     ** elRef.nativeElement.style.color is use to style the the elemet on which directive is use.
     ** By default color is #00ffff
     */
 ngAfterViewInit(): void {
       this.elRef.nativeElement.style.color = this.tcolor || '#00ffff';
    }
	 
}
