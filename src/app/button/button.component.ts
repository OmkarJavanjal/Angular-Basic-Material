import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
@Input() btnColor ="green";
@Input() btnLoading ="done";
@Input() btnSize ="";
@Input() textWeight ="";
@Input() textSize="";
@Input() btnText:string;
@Input() btnId:string;
@Input() btnDisabled="false";

  constructor() { }

  ngOnInit() {
  }

}
