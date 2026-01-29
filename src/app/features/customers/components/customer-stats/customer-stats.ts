import { Component, Input, input } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { TrendingDown, TrendingUp } from 'lucide-angular/src/icons';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-customer-stats',
  imports: [
    LucideAngularModule,
    NgClass
  ],
  templateUrl: './customer-stats.html',
  styleUrl: './customer-stats.css',
})
export class CustomerStats {
  @Input() label! : string;
  @Input() statCounter! : number;
  @Input() percentage! : number;
  @Input() isPositive! : boolean

  protected readonly trendingUp = TrendingUp;
  protected readonly trendingDown = TrendingDown;
}
