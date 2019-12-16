import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CountryComponent } from './country.component';
import { StudentService } from '../service/student.service';
import {Title} from '@angular/platform-browser';
import {FormGroup,ReactiveFormsModule} from '@angular/forms';
import {By} from "@angular/platform-browser";
import {OnInit,DebugElement} from "@angular/core";
import { Http, ConnectionBackend, RequestOptions, BaseRequestOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import {HttpMethodService} from '../service/http-method.service';
import { FormsModule } from '@angular/forms';
import {
  PagerService
} from '../service/pager.service';
describe('CountryComponent', () => {
  let component: CountryComponent;
  let fixture: ComponentFixture<CountryComponent>;
  let textDebugElement: DebugElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryComponent ],
      imports: [ReactiveFormsModule, FormsModule ],
      providers: [
        { provide: ConnectionBackend, useClass: MockBackend },
        { provide: RequestOptions, useClass: BaseRequestOptions },
        StudentService,Http,HttpMethodService,PagerService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryComponent);
    component = fixture.componentInstance;
    textDebugElement = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create CountryComponent', () => {
    expect(component).toBeTruthy();
  });
});
