import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpSecondChildComponent } from './emp-second-child.component';

describe('EmpSecondChildComponent', () => {
  let component: EmpSecondChildComponent;
  let fixture: ComponentFixture<EmpSecondChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpSecondChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpSecondChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
