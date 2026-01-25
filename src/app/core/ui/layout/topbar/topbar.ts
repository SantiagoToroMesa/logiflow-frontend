import { Component } from '@angular/core';
import { BellDot, LucideAngularModule, LucideIconData, Plus, Search } from 'lucide-angular';

@Component({
  selector: 'app-topbar',
  imports: [LucideAngularModule],
  templateUrl: './topbar.html',
})
export class Topbar {
  // Lucide icons
  search: LucideIconData = Search;
  plus: LucideIconData = Plus;
  bellDot: LucideIconData = BellDot;
}
