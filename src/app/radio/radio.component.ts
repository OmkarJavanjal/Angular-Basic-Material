import { Component, OnInit, Input, Output,  } from '@angular/core';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class RadioComponent implements OnInit {

  @Input() radioText: string;
  @Input() radioValue: string;
  @Input() radioName: string;
  @Input() defaultChoice: string;
  @Input() id: string;

  constructor() { }

  ngOnInit() {
    //this.defaultChoice="2";
  }

}
