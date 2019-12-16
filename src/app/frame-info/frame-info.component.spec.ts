import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameInfoComponent } from './frame-info.component';

describe('FrameInfoComponent', () => {
  let component: FrameInfoComponent;
  let fixture: ComponentFixture<FrameInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrameInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrameInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
