import { Component, OnInit } from '@angular/core';
//import { PrimaryComponent } from '../2019/primary/primary.component';
//import { SecondaryComponent } from '../2019/secondary/secondary.component';

import { Router, NavigationEnd, ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-indicator',
  templateUrl: './indicator.component.html',
  styleUrls: ['./indicator.component.css']
})
export class IndicatorComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) {
    console.log(activatedRoute.snapshot.url);
  
   }

  ngOnInit() {
  }

}
