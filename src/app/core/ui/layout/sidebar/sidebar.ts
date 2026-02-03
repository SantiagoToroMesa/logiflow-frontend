import { Component } from '@angular/core';
import {
  LucideAngularModule,
  Archive,
  FileText,
  LayoutDashboard,
  LucideIconData,
  Map,
  Settings,
  Users,
  LogOut,
} from 'lucide-angular';
import { SidebarItem } from '../components/sidebar-item/sidebar-item';

type sidebarItem = {
  label: string;
  icon: LucideIconData;
  route: string;
};

@Component({
  selector: 'app-sidebar',
  imports: [SidebarItem, LucideAngularModule],
  templateUrl: './sidebar.html',
})
export class Sidebar {
  settings: sidebarItem = {
    label: 'Settings',
    icon: Settings,
    route: 'settings',
  };

  logOut: sidebarItem = {
    label: 'Log out',
    icon: LogOut,
    route: 'settings',
  };

  sidebarItems: sidebarItem[] = [
    {
      label: 'Dashboard',
      icon: LayoutDashboard,
      route: 'dashboard',
    },
    {
      label: 'Shipments',
      icon: Archive,
      route: 'shipments',
    },
    {
      label: 'Track & Trace',
      icon: Map,
      route: 'track',
    },
    {
      label: 'Customers',
      icon: Users,
      route: 'customers',
    },
    {
      label: 'Reports',
      icon: FileText,
      route: 'reports',
    },
  ];
}
