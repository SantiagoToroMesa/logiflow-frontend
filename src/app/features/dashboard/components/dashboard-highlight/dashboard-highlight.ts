import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { LucideIconData, LucideAngularModule } from 'lucide-angular';
import { TrendingDown, TrendingUp } from 'lucide-angular/src/icons';

@Component({
  selector: 'app-dashboard-highlight',
  imports: [LucideAngularModule, NgClass],
  templateUrl: './dashboard-highlight.html',
})
export class DashboardHighlight {
  // Input data
  @Input() position!: 1 | 2 | 3 | 4;
  @Input() label!: string;
  @Input() icon!: LucideIconData;
  @Input() statCounter!: number;
  @Input() percentage!: number;
  @Input() isPositive!: boolean;

  // Lucide icons
  trendingUp: LucideIconData = TrendingUp;
  trendingDown: LucideIconData = TrendingDown;

  // Icon themes based on position
  get colorClasses() {
    const themes = {
      1: 'bg-blue-100 text-blue-600',
      2: 'bg-purple-100 text-purple-600',
      3: 'bg-red-100 text-red-600',
      4: 'bg-green-100 text-green-600',
    };

    return themes[this.position] || 'bg-slate-100 text-slate-600';
  }
}
