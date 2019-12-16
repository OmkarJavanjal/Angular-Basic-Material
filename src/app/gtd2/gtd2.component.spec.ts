import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gtd2Component } from './gtd2.component';

describe('Gtd2Component', () => {
  let component: Gtd2Component;
  let fixture: ComponentFixture<Gtd2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gtd2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gtd2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
