import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appOnlyString]'
})
export class OnlyStringDirective {
  regexStr = '^[0-9]*$'; // Allow only number
 // regexStr = '^[a-zA-Z]*$';  // Aloow only string
  constructor(private el: ElementRef) { }
  @Input('appOnlyString') OnlyNumber: boolean;
  @HostListener('keydown', ['$event']) onKeyDown(event) {
    let e = <KeyboardEvent> event;
    if (this.OnlyNumber) {     
      let ch = String.fromCharCode(e.keyCode);
      let regEx =  new RegExp(this.regexStr);    
      if(regEx.test(ch))
        return;
      else
         e.preventDefault();
      }
  }
}
