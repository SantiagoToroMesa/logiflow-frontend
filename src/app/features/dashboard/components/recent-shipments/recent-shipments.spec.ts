import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentShipments } from './recent-shipments';

describe('RecentShipments', () => {
  let component: RecentShipments;
  let fixture: ComponentFixture<RecentShipments>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentShipments],
    }).compileComponents();

    fixture = TestBed.createComponent(RecentShipments);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
