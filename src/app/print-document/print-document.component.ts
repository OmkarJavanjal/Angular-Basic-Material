import {
  Component,
  OnInit,
  TemplateRef,
  ViewContainerRef,
  ElementRef,
  AfterViewChecked,
  ViewChild,
  Directive,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-print-document',
  templateUrl: './print-document.component.html',
  styleUrls: ['./print-document.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class PrintDocumentComponent implements OnInit {
  @Input() printData:any;
  isPlanAvailable=true;
  showDentalDiv=true;
  more=true;

  constructor() { }

  ngOnInit() {
  }

}
