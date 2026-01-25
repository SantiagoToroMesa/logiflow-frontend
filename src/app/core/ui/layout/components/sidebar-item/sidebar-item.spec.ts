import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarItem } from './sidebar-item';

describe('SidebarItem', () => {
  let component: SidebarItem;
  let fixture: ComponentFixture<SidebarItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarItem],
    }).compileComponents();

    fixture = TestBed.createComponent(SidebarItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
