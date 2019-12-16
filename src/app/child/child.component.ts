import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges {
@Input() prop1: string;
private _name: string;

@Input() prop2: string;
private _name2: string;

  constructor() { }

  ngOnInit() {
  }
  /**
   * 
   * @param changes : it will store all vlaue changes in Object form in component.
   *  And if we will detecut any changes after that we can use logic if required
   */
  ngOnChanges(changes: SimpleChanges) {
    console.log('changes: ', changes);// It will return all changes in object form 
    const name2: SimpleChange = changes.prop2; 
    this._name2 = name2.currentValue.toUpperCase();
    if(changes.prop1){
      const name: SimpleChange = changes.prop1;
      this._name = name.currentValue.toUpperCase();
    }
  } 

}
