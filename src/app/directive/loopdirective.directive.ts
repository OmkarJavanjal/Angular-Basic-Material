import {  Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appLoopdirective]'
})
/**
 * We will create a custom structural directive that will create host element as many times 
 * as given by user in DOM layout.
 */
export class LoopdirectiveDirective {
/**
 * 
 * @param templateRef 
 * 
 * @param viewContainer 
 */
  constructor( private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) { }

    @Input('appLoopdirective') set loop(num: number) {
      for(var i=0; i < num; i++) {
         /**
         * 
         * To add host element in DOM layout, we need to call createEmbeddedView() method of ViewContainerRef. 
         * Find the line of code.And here host element will be repeat
         * this.templateRefis use to create <ng-template> in which host element is create dynamic
         * this.viewContainer.createEmbeddedView is the place where <ng-template> is create
         * 
         */
        this.viewContainer.createEmbeddedView(this.templateRef);
      }
    }



}
