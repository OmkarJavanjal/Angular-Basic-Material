import { Component, OnInit } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  name: string = "Carlos";
  name2: string = "Carlos";
  constructor() { }

  ngOnInit() {}
  increment() {
    this.name2= "Abhinav";  
  }
}
