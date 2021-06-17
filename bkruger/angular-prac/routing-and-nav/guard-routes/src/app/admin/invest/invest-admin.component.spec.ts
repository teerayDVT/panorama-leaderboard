import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestAdminComponent } from './invest-admin.component';

describe('InvestAdminComponent', () => {
  let component: InvestAdminComponent;
  let fixture: ComponentFixture<InvestAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
