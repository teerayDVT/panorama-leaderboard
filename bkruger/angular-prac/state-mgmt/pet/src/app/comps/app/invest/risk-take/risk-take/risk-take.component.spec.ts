import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskTakeComponent } from './risk-take.component';

describe('RiskTakeComponent', () => {
  let component: RiskTakeComponent;
  let fixture: ComponentFixture<RiskTakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiskTakeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RiskTakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
