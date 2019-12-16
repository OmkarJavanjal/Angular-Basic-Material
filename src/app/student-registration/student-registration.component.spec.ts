import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StudentRegistrationComponent } from './student-registration.component';
import {FormBuilder, FormGroup, Validators, FormControl , ReactiveFormsModule , FormsModule  } from '@angular/forms';
import { StudentService } from '../service/student.service';
import { ValidationService } from '../service/validation.service';
import { Http, ConnectionBackend, RequestOptions, BaseRequestOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';

describe('StudentRegistrationComponent', () => {
  let component: StudentRegistrationComponent;
  let fixture: ComponentFixture<StudentRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentRegistrationComponent ],
      providers: [
        { provide: ConnectionBackend, useClass: MockBackend },
        { provide: RequestOptions, useClass: BaseRequestOptions },
        StudentService
      ],
      imports: [FormsModule ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
