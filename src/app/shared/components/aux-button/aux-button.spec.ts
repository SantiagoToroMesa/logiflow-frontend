import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuxButton } from './aux-button';

describe('AuxButton', () => {
  let component: AuxButton;
  let fixture: ComponentFixture<AuxButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuxButton],
    }).compileComponents();

    fixture = TestBed.createComponent(AuxButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
