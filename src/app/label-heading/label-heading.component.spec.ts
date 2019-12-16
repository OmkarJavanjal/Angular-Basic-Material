import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelHeadingComponent } from './label-heading.component';

describe('LabelHeadingComponent', () => {
  let component: LabelHeadingComponent;
  let fixture: ComponentFixture<LabelHeadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabelHeadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
