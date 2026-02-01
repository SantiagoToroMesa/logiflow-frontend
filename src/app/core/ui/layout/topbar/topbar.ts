import { Component } from '@angular/core';
import { BellDot, LucideAngularModule, LucideIconData, Plus, Search } from 'lucide-angular';
import { Button } from '../../../../shared/components/button/button';

@Component({
  selector: 'app-topbar',
  imports: [LucideAngularModule, Button],
  templateUrl: './topbar.html',
})
export class Topbar {
  // Lucide icons
  search: LucideIconData = Search;
  plus: LucideIconData = Plus;
  bellDot: LucideIconData = BellDot;
  protected readonly Plus = Plus;
}
