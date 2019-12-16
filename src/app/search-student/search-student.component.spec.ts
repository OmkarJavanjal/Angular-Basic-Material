import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchStudentComponent } from './search-student.component';
import {
  StudentService
} from '../service/student.service';
import {FormBuilder, FormGroup, Validators, FormControl , ReactiveFormsModule , FormsModule  } from '@angular/forms';
describe('SearchStudentComponent', () => {
  let component: SearchStudentComponent;
  let fixture: ComponentFixture<SearchStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchStudentComponent ],
      providers: [
        StudentService
      ],
      imports: [FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
