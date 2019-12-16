import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ternary-text',
  templateUrl: './ternary-text.component.html',
  styleUrls: ['./ternary-text.component.css']
})
export class TernaryTextComponent implements OnInit {
  @Input() textColor ="green";
  @Input() textWeight ="";
  @Input() textSize="";
  @Input() elementId:string;
  @Input() labelText:string;
  constructor() { }

  ngOnInit() {
  }

}
