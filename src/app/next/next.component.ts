import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-next',
  templateUrl: './next.component.html',
  styleUrls: ['./next.component.css']
})
export class NextComponent implements OnInit {
  @Input() count: any;
  @Input() isDisabled: boolean;
  constructor() { }

  ngOnInit() {
    console.log('count', this.count);
  }
  ngOnChanges (changes) {
    console.log('changes-----', changes);
    console.log('changes--->>--', changes.isDisabled.currentValue );
 
  }
}
