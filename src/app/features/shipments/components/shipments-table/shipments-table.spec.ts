import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentsTable } from './shipments-table';

describe('ShipmentsTable', () => {
  let component: ShipmentsTable;
  let fixture: ComponentFixture<ShipmentsTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShipmentsTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShipmentsTable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
