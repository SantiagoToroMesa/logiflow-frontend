import { Component } from '@angular/core';
import { LucideAngularModule, LucideIconData, Truck } from 'lucide-angular';

@Component({
  selector: 'app-brand-logo',
  imports: [LucideAngularModule],
  templateUrl: './brand-logo.html',
})
export class BrandLogo {
  truck: LucideIconData = Truck;
}
