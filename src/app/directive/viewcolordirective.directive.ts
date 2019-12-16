import { Directive, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appViewcolordirective]'
})
export class ViewcolordirectiveDirective implements AfterViewInit {
/**
 * 
 * @param elRef :
 */
  constructor(private elRef: ElementRef) {
  }
  /**
   * AfterViewInit: It is the lifecycle hook that is called after a component view has been fully initialized.
   */
  ngAfterViewInit() {
   this.elRef.nativeElement.style.color = 'red';
  }
  change(changedColor: String) {
   this.elRef.nativeElement.style.color = changedColor;
  }

}
