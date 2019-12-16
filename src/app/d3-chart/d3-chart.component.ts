import { Component, OnInit } from '@angular/core';
//import * as d3 from 'd3';
@Component({
  selector: 'app-d3-chart',
  templateUrl: './d3-chart.component.html',
  styleUrls: ['./d3-chart.component.css']
})
export class D3ChartComponent implements OnInit {
  public data = [
    [0,-0,0,0,0,3 ],
    [1,-1,1,2,1,6 ],
    [2,-2,4,4,0.5,2],
    [3,-3,9,6,0.33,4],
    [4,-4,16,8,0.25,9]
  ];
  
  constructor() { }

  ngOnInit() {
  }
  /**public pc = this.D3.parcoords()("#example")
  .data(this.data)
  .render()
  .createAxes();**/
  
}
