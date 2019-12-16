import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpParamDataComponent } from './emp-param-data.component';

describe('EmpParamDataComponent', () => {
  let component: EmpParamDataComponent;
  let fixture: ComponentFixture<EmpParamDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpParamDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpParamDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
