import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepIndicatorFormComponent } from './step-indicator-form.component';

describe('StepIndicatorFormComponent', () => {
  let component: StepIndicatorFormComponent;
  let fixture: ComponentFixture<StepIndicatorFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepIndicatorFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepIndicatorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
