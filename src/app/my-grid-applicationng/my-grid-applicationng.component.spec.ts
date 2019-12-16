import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyGridApplicationngComponent } from './my-grid-applicationng.component';

describe('MyGridApplicationngComponent', () => {
  let component: MyGridApplicationngComponent;
  let fixture: ComponentFixture<MyGridApplicationngComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyGridApplicationngComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyGridApplicationngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
