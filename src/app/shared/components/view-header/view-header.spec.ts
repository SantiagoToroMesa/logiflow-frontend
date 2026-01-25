import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewHeader } from './view-header';

describe('ViewHeader', () => {
  let component: ViewHeader;
  let fixture: ComponentFixture<ViewHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewHeader],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewHeader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
