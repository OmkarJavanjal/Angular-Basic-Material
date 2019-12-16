import { Directive, Input, TemplateRef, ViewContainerRef  } from '@angular/core';

@Directive({
  selector: '[appStructuraldirective]'
})
export class StructuraldirectiveDirective {
/**
 * To change DOM layout we should use TemplateRef and ViewContainerRef in our structural directive. 
 * 
 * @param templateRef : It represents an embedded template that can be used to instantiate embedded views. 
 * 
 * @param viewContainer  : It represents a container where one or more views can be attached. 
 */
  constructor(private templateRef: TemplateRef<any>,private viewContainer: ViewContainerRef) { }

    @Input() set appStructuraldirective(condition: boolean) {
      if (condition) {
        /**
         * To add host element in DOM layout, we need to call createEmbeddedView() method of ViewContainerRef. 
         * Find the line of code.
         */
       this.viewContainer.createEmbeddedView(this.templateRef);
      } else {
        /**
         * If we want to clear view container, call clear() method of ViewContainerRef as given below.
         */
       this.viewContainer.clear();
     } 
   }


}
