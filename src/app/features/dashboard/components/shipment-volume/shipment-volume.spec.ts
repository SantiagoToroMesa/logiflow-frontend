import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentVolume } from './shipment-volume';

describe('ShipmentVolume', () => {
  let component: ShipmentVolume;
  let fixture: ComponentFixture<ShipmentVolume>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShipmentVolume],
    }).compileComponents();

    fixture = TestBed.createComponent(ShipmentVolume);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
