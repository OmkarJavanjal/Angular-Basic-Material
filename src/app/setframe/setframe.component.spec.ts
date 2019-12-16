import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetframeComponent } from './setframe.component';

describe('SetframeComponent', () => {
  let component: SetframeComponent;
  let fixture: ComponentFixture<SetframeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetframeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetframeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
