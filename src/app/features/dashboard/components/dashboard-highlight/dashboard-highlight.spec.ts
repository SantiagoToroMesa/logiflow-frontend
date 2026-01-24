import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardHighlight } from './dashboard-highlight';
import { Activity, LucideAngularModule } from 'lucide-angular';
import { By } from '@angular/platform-browser';

describe('DashboardHighlight', () => {
  let component: DashboardHighlight;
  let fixture: ComponentFixture<DashboardHighlight>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardHighlight, LucideAngularModule],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardHighlight);
    component = fixture.componentInstance;

    component.label = 'Total Users';
    component.statCounter = 1250;
    component.percentage = 12;
    component.isPositive = true;
    component.icon = Activity;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Testing Data Rendering
  it('should display the correct label and stat counter', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.label-class')?.textContent).toContain('Total Users');
    expect(compiled.querySelector('.stat-class')?.textContent).toContain('1250');
  });

  // Testing Conditional Logic
  it('should show trendingUp icon when isPositive is true', () => {
    component.isPositive = true;
    fixture.detectChanges();

    const iconDebugEl = fixture.debugElement.query(By.css('lucide-angular.text-green-700'));

    expect(iconDebugEl).toBeTruthy();
    expect(iconDebugEl.componentInstance.img).toBe(component.trendingUp);
  });

  it('should render the TrendingDown icon when isPositive is false', () => {
    component.isPositive = false;
    fixture.detectChanges();

    const trendIconEl = fixture.debugElement.query(By.css('.text-red-700 lucide-angular'));

    expect(trendIconEl).toBeTruthy();
    expect(trendIconEl.componentInstance.img).toBe(component.trendingDown);
  });
});
