import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-box',
  templateUrl: './input-box.component.html',
  styleUrls: ['./input-box.component.css']
})
export class InputBoxComponent implements OnInit {
  @Input() inputTypeText: string;
  @Input() inputTypePass: string;
  @Input() inputPlaceHolder: string;
  @Input() maxlength: number;
  @Input() minLength: number;
  @Input() inputId: any;
  constructor() { }

  ngOnInit() {
  }

}
