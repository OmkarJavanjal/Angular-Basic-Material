import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-2018-primary',
  templateUrl: './primary.component.html',
  styleUrls: ['./primary.component.css']
})
export class Primary2018Component implements OnInit {

  public query:any;
  sub;pageNum;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { 
    console.log('activatedRoute.snapshot', activatedRoute.snapshot.queryParams.order);
    this.query=activatedRoute.snapshot.queryParams.order;
  }

  ngOnInit() {
    this.sub = this.activatedRoute.queryParams
      .subscribe(params => {
      this.pageNum = +params['pageNum']||0;
      console.log('Query params ',this.pageNum) });
  }

}
