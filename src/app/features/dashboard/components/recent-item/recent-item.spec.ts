import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentItem } from './recent-item';

describe('RecentItem', () => {
  let component: RecentItem;
  let fixture: ComponentFixture<RecentItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
