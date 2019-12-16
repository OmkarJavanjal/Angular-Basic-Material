import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyloadingfirstchildComponent } from './lazyloadingfirstchild.component';

describe('LazyloadingfirstchildComponent', () => {
  let component: LazyloadingfirstchildComponent;
  let fixture: ComponentFixture<LazyloadingfirstchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyloadingfirstchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyloadingfirstchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
