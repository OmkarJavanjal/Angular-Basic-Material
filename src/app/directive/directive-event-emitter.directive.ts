import { Directive ,ElementRef, AfterViewInit, Input, HostListener, Renderer} from '@angular/core';

@Directive({
  selector: '[appDirectiveEventEmitter]'
})
export class DirectiveEventEmitterDirective {
/**
 * 
 * @param elRef Use ElementRef class to access DOM to change host element appearance. 
 * on which element directive is use.
 */
  constructor(private elRef: ElementRef, private renderer: Renderer) { 
    /**
     * Use renderer to render the element with styles
     */
    this.renderer.setElementStyle(elRef.nativeElement, 'display', 'none');
  }

  /**
   * @Input() myHidden: it will take input data from html and use that data inside the directive and
   * apply logic on data based on requirements
   */
  @Input() myHidden: boolean;

  ngOnInit(){
    // Use renderer to render the emelemt with styles
    if(this.myHidden) {
        console.log('hide');
       this.renderer.setElementStyle(this.elRef.nativeElement, 'display', 'none');
    }
  }
 /**
   * @Input() cpColor: it will take input data from html and use that data inside the directive and
   * apply logic on data based on requirements
   */
  @Input() cpColor: string;
  /**
   *  To change appearance of HTML element in DOM, we need to use ElementRef within custom directive definition. ElementRef can directly access the DOM.
   * AfterViewInit is the lifecycle hook that is called after a component view has been fully initialized. 
   * To use AfterViewInit, our class will implement it and override its method ngAfterViewInit().
   * 
   * ElementRef grants direct access to the host DOM element through its nativeElement property.
   */
  ngAfterViewInit(): void {
    this.elRef.nativeElement.style.color = this.cpColor || 'green';
    this.elRef.nativeElement.style.fontSize = '20px';
 }	

/**
 * If we want to change element appearance in DOM on any event then we need to listen event in our custom directive. 
 * To listen event we will use Angular @HostListener() decorator in our custom directive. 
 * The event name will be assigned to @HostListener() decorator. 
 * The @HostListener decorator lets you subscribe to events of the DOM element that hosts an attribute directive, 
 * the <p> in this case. 
 */
 @HostListener('mouseover') onMouseOver() {
  //this.changeColor('pink');
  /** We can also use @HostListener() with @Input() to get user input.  */
  this.changeColor(this.cpColor || 'yellow');
}
/**
 * Use @HostListener() decorator to listen events in custom attribute directive.
 * means call changeColor method when we fire mouseleave event
 */
@HostListener('mouseleave') onMouseLeave() {
  this.changeColor('black');
}

private changeColor(color: string) {
  this.elRef.nativeElement.style.color = color;
} 

}
