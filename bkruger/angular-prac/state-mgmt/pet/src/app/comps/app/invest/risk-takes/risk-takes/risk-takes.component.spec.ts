import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskTakesComponent } from './risk-takes.component';

describe('RiskTakesComponent', () => {
  let component: RiskTakesComponent;
  let fixture: ComponentFixture<RiskTakesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiskTakesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RiskTakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
