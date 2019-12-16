import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-2020-primary',
  templateUrl: './primary.component.html',
  styleUrls: ['./primary.component.css']
})
export class Primary2020Component implements OnInit {
  public query:any;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { 
    console.log('activatedRoute.snapshot', activatedRoute.snapshot.queryParams.order);
    this.query=activatedRoute.snapshot.queryParams.order;
  }

  ngOnInit() {
  }

}
