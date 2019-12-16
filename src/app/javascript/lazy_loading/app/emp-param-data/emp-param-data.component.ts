import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
@Component({
  selector: 'app-emp-param-data',
  templateUrl: './emp-param-data.component.html',
  styleUrls: ['./emp-param-data.component.scss']
})
export class EmpParamDataComponent implements OnInit {
	id:number;
  constructor(private routes:ActivatedRoute) { }
  ngOnInit() {
	  this.id = this.routes.snapshot.params['id'];
	  console.log(this.id);
  }
}
