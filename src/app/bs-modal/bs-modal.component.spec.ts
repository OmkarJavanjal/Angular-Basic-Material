import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BsModalComponent } from './bs-modal.component';

describe('BsModalComponent', () => {
  let component: BsModalComponent;
  let fixture: ComponentFixture<BsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BsModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
