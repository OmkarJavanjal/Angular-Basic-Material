import { MockElementRef } from './../mocks/mock-element-ref';
import { async, ComponentFixture, TestBed  } from '@angular/core/testing';
import { StudentDetailsComponent } from './student-details.component';
import { Http, ConnectionBackend, RequestOptions, BaseRequestOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Router, NavigationEnd, ActivatedRoute,RouterOutlet,RouterModule, Routes  } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { StudentService } from '../service/student.service';
import { CarouselserviceService } from '../service/carouselservice.service';
import { CarouseldirectiveDirective } from '../directive/carouseldirective.directive';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA} from '@angular/core';


describe('StudentDetailsComponent', () => {
  let component: StudentDetailsComponent;
  let fixture: ComponentFixture<StudentDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StudentDetailsComponent],
      providers: [
        { provide: ConnectionBackend, useClass: MockBackend },
        { provide: RequestOptions, useClass: BaseRequestOptions },
        {provide: ActivatedRoute, useValue: MockElementRef},
        FormBuilder,
        BsModalService,
        Router,
        ActivatedRoute,
        Title,
        StudentService,
        CarouselserviceService,
        CarouseldirectiveDirective,
        RouterOutlet
      ],
      imports: [
        RouterTestingModule 
    ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create StudentDetailsComponent', () => {
    expect(component).toBeTruthy();
  });
});
