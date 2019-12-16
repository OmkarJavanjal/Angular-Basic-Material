import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyloadingsecondchildComponent } from './lazyloadingsecondchild.component';

describe('LazyloadingsecondchildComponent', () => {
  let component: LazyloadingsecondchildComponent;
  let fixture: ComponentFixture<LazyloadingsecondchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyloadingsecondchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyloadingsecondchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
