import { Directive, ElementRef, HostListener, Input } from '@angular/core';
/**
     * A class representing a ModaldirectiveDirective
     */
@Directive({
  selector: '[appModaldirective]'
})
/**
     * A class representing a ModaldirectiveDirective
     * @class  ModaldirectiveDirective 
     */
export class ModaldirectiveDirective {
  /**
     ** Create a point.
     ** @param elRef - this create instance of ElementRef.
    */
 constructor(private elRef: ElementRef) {
   }
   /**
     ** @HostListener is call mouseover.
     ** mouseover method will be call when we mouceover on the element on which directive is use
    */
    @HostListener('mouseover') onMouseOver() {
     this.changeColor('red');
   }
   /**
     ** @HostListener is call mouseleave.
     ** mouseleave method will be call when we mouseleave from the element on which directive is use
    */
    @HostListener('mouseleave') onMouseLeave() {
     this.changeColor('black');
   }
   /**
     ** @HostListener is call click.
     ** click method will be call when we click on the element on which directive is use
    */
    @HostListener('click') onclick() {
   }
   /**
     ** changeColor method will be call by all @HostListener method to change the color.
     ** @param color - color is the the variable name wich accept the color name as a string
    */
   private changeColor(color: string) {
     this.elRef.nativeElement.style.color = color;
   }  

}
