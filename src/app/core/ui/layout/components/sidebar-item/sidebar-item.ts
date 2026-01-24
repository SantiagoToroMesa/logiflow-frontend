import { Component, Input } from '@angular/core';
import { LucideAngularModule, LucideIconData } from 'lucide-angular';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar-item',
  imports: [LucideAngularModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar-item.html',
})
export class SidebarItem {
  @Input() label!: string;
  @Input() icon!: LucideIconData;
  @Input() route!: string;
}
