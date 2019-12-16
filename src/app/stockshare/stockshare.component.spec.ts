import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockshareComponent } from './stockshare.component';

describe('StockshareComponent', () => {
  let component: StockshareComponent;
  let fixture: ComponentFixture<StockshareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockshareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockshareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
