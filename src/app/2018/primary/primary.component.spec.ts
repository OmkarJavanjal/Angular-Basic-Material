import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Primary2018Component } from './primary.component';

describe('PrimaryComponent', () => {
  let component: Primary2018Component;
  let fixture: ComponentFixture<Primary2018Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Primary2018Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Primary2018Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
