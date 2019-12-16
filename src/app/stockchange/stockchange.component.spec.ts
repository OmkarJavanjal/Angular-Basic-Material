import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockchangeComponent } from './stockchange.component';

describe('StockchangeComponent', () => {
  let component: StockchangeComponent;
  let fixture: ComponentFixture<StockchangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockchangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
