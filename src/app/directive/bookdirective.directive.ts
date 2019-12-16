import { Directive, Input  } from '@angular/core';

@Directive({
  selector: '[appBookdirective]'
})
export class BookdirectiveDirective {

  constructor() { }
  @Input() bookId: string;
  @Input() bookName: string;


}
