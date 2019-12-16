import { HttpMethodService } from './../service/http-method.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LogdinUserDetailComponent } from './logdin-user-detail.component';
import { LocalStorageService } from '../service/local-storage.service';
import { Router, RouterModule ,RouterLink, NavigationEnd, ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { StudentService } from '../service/student.service';
import { StudentServiceMock } from '../service/student.service.mock';
describe('LogdinUserDetailComponent', () => {
  let component: LogdinUserDetailComponent;
  let fixture: ComponentFixture<LogdinUserDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogdinUserDetailComponent ],
      providers:[LocalStorageService,{provide: StudentService, useClass: StudentServiceMock},HttpMethodService],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogdinUserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
