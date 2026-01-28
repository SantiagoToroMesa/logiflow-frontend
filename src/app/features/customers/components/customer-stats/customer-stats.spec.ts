import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerStats } from './customer-stats';

describe('CustomerStats', () => {
  let component: CustomerStats;
  let fixture: ComponentFixture<CustomerStats>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerStats]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerStats);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
