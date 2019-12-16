import { AfterViewInit, Component, Directive, Input, QueryList, ViewChildren } from '@angular/core';

@Directive({
  selector: '[appPanedirective]'
})
export class PanedirectiveDirective {

  constructor() { }
  @Input() id: string;

  
}
