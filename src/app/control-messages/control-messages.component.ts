import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ValidationService } from '../service/validation.service';
/**
     * A class representing a ControlMessagesComponent
     * @class  ControlMessagesComponent
     */
@Component({
  selector: 'control-messages',
  templateUrl: './control-messages.component.html',
  styleUrls: ['./control-messages.component.css']
})
  /**
     * A class representing a ControlMessagesComponent
     * @class  ControlMessagesComponent
     */
export class ControlMessagesComponent implements OnInit {
/**
	** control is a instant of FormControl
	*/
  @Input() control: FormControl;
  /**
	** constructor method
	*/
  constructor() { }
  /**
	** ngOnInit method
	*/
  ngOnInit() {}
  
 /**
	** errorMessage method which are use to handle the error which need to be display in
	*/    
  errorMessage() {
   // console.log('this.control--', this.control);
    for (let propertyName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
        return ValidationService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
      }
    }
    return null;
  }
}
