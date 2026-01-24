import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentsPage } from './shipments-page';

describe('ShipmentsPage', () => {
  let component: ShipmentsPage;
  let fixture: ComponentFixture<ShipmentsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShipmentsPage],
    }).compileComponents();

    fixture = TestBed.createComponent(ShipmentsPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
