import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TernaryTextComponent } from './ternary-text.component';

describe('TernaryTextComponent', () => {
  let component: TernaryTextComponent;
  let fixture: ComponentFixture<TernaryTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TernaryTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TernaryTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
