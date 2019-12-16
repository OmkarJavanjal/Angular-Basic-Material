import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-label-text',
  templateUrl: './label-text.component.html',
  styleUrls: ['./label-text.component.css']
})
export class LabelTextComponent implements OnInit {
  @Input() textColor ="green";
  @Input() textWeight ="";
  @Input() textSize="";
  @Input() elementId:string;
  @Input() labelText:string;
  
  constructor() { }

  ngOnInit() {
  }

}
