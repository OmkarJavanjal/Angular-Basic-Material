import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchProductDetailsComponent } from './search-product-details.component';
import {StudentService} from '../service/student.service';
import { Http, ConnectionBackend, RequestOptions, BaseRequestOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';


describe('SearchProductDetailsComponent', () => {
  let component: SearchProductDetailsComponent;
  let fixture: ComponentFixture<SearchProductDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchProductDetailsComponent ],
      providers: [
        { provide: ConnectionBackend, useClass: MockBackend },
        { provide: RequestOptions, useClass: BaseRequestOptions },
        StudentService
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
