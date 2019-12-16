import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-stockshare',
  templateUrl: './stockshare.component.html',
  styleUrls: ['./stockshare.component.css']
})
export class StockshareComponent implements OnInit{
  @Input() dateRangeSelect: any;


  constructor() { }

  ngOnInit() {}

}