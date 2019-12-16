import {
  Component, OnInit, NgModule, CUSTOM_ELEMENTS_SCHEMA, TemplateRef, ViewChild, ElementRef
}
from '@angular/core';
import {
  FormBuilder, FormGroup, Validators, ValidatorFn, FormArray, FormControl
}
from '@angular/forms';
import {
  Router, NavigationEnd, ActivatedRoute
}
from '@angular/router';
import {
  Title
}
from '@angular/platform-browser';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import {
  User
}
from '../service/user';
import {
  StudentService
}
from '../service/student.service';
import {
  ValidationService
}
from '../service/validation.service';
import {
  Observable
}
from 'rxjs/Observable';
import {
  BsModalService
}
from 'ngx-bootstrap/modal';
import {
  BsModalRef
}
from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {
  BsModalComponent
}
from '../bs-modal/bs-modal.component';
@Component({
  selector: 'app-step-indicator-form',
  templateUrl: './step-indicator-form.component.html',
  styleUrls: ['./step-indicator-form.component.css']
})
export class StepIndicatorFormComponent implements OnInit {
  stepForm: FormGroup;
  constructor(
      private fb: FormBuilder,
      private router: Router,
      private activatedRoute: ActivatedRoute,
      private modalService: BsModalService,
      private titleService: Title,
      private studentserviceService: StudentService) {}

  ngOnInit() {
      this.showTab(this.currentTab); // Display the crurrent tab
      this.studentFormData();
  }
  public currentTab = 0; // Current tab is set to be the first tab (0)

  open() {

  }
  showTab(n: any) {
      // This function will display the specified tab of the form...
      var x = document.getElementsByClassName("tab");
      x[n]['style'].display = "block";
      //... and fix the Previous/Next buttons:
      if (n == 0) {
          document.getElementById("prevBtn").style.display = "none";
      } else {
          document.getElementById("prevBtn").style.display = "inline";
      }
      if (n == (x.length - 1)) {
          document.getElementById("nextBtn").innerHTML = "Submit";
      } else {
          document.getElementById("nextBtn").innerHTML = "Next";
      }
      //... and run a function that will display the correct step indicator:
      this.fixStepIndicator(n)
  }

  nextPrev(n) {
      console.log('n', n);
      // This function will figure out which tab to display
      var x = document.getElementsByClassName("tab");
      // Exit the function if any field in the current tab is invalid:
      if (n == 1 && !this.validateForm()) return false;
      // Hide the current tab:
      x[this.currentTab]['style'].display = "none";
      // Increase or decrease the current tab by 1:
      this.currentTab = this.currentTab + n;
      // if you have reached the end of the form...
      if (this.currentTab >= x.length) {
          // ... the form gets submitted:
          // document.getElementById("regForm").submit();
          // document.getElementById("nextBtn").innerHTML = "Go to Home page";
          document.getElementById("prevBtn").style.display = "none";
          document.getElementById("nextBtn").style.display = "none";
          document.getElementById("nextPage").style.display = "inline";
          this.onFormSubmit();
          return false;
      }
      if (n == -1) {
          document.getElementsByClassName("indicator")[this.currentTab].classList.remove("done");
      }
      // Otherwise, display the correct tab:
      this.showTab(this.currentTab);
  }

  validateForm() {
      // This function deals with validation of the form fields
      var x, y, i, valid = true;
      x = document.getElementsByClassName("tab");
      y = x[this.currentTab].getElementsByTagName("input");
      // A loop that checks every input field in the current tab:
      for (i = 0; i < y.length; i++) {
          // If a field is empty...
          if (y[i].value == "") {
              // add an "invalid" class to the field:
              y[i].className += " invalid";
              // and set the current valid status to false
              valid = false;
          }
      }
      // If the valid status is true, mark the step as finished and valid:
      if (valid) {
          document.getElementsByClassName("indicator")[this.currentTab].className += " done";
      }
      return valid; // return the valid status
  }

  fixStepIndicator(n) {
      // This function removes the "active" class of all steps...
      var i, x = document.getElementsByClassName("indicator");
      for (i = 0; i < x.length; i++) {
          x[i].className = x[i].className.replace(" active", "");
      }
      //... and adds the "active" class on the current step:
      x[n].className += " active";
  }

  /**
   * studentFormData Method which will fetch student form data
   */
  private studentFormData(): void {
      this.stepForm = this.fb.group({
          //firstName: ['', [Validators.required, ValidationService.spaceNotAllow, ValidationService.onlyAlphabetsAllow]],
          firstName: ['', [Validators.required]],
          lastName: ['', [Validators.required]],
          email: ['', [Validators.required]],
          mobile: ['', [Validators.required]],
          userName: ['', Validators.required],
          pwd: ['', [Validators.required]]

      });
      //	console.log('his.signupForm ', this.signupForm );
  }
  public onFormSubmit() {
      console.log(this.stepForm.value);

  }

  nextPage() {
      alert('fgf');
  }

  /**
   * Code For Modal
   */

  openModal() {

  }

}