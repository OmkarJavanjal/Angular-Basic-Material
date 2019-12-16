import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpFirstChildComponent } from './emp-first-child.component';

describe('EmpFirstChildComponent', () => {
  let component: EmpFirstChildComponent;
  let fixture: ComponentFixture<EmpFirstChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpFirstChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpFirstChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
