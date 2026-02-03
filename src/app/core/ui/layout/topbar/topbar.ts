import { Component } from '@angular/core';
import { BellDot, LucideAngularModule, LucideIconData, Plus, Search } from 'lucide-angular';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-topbar',
  imports: [LucideAngularModule, NgOptimizedImage],
  templateUrl: './topbar.html',
})
export class Topbar {
  // Logged user details
  userName: string = 'Thomas Anderson';
  userRole: string = 'Logistics Manager';
  userImage?: string;
  initial = this.userName.charAt(0).toUpperCase();

  // Lucide icons
  search: LucideIconData = Search;
  plus: LucideIconData = Plus;
  bellDot: LucideIconData = BellDot;
  protected readonly Plus = Plus;
}
