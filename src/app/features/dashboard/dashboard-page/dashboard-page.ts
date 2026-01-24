import { Component } from '@angular/core';
import {
  LucideAngularModule,
  LucideIconData,
  Banknote,
  Calendar,
  Send,
  TriangleAlert,
  Truck,
} from 'lucide-angular';
import { DashboardHighlight } from '../components/dashboard-highlight/dashboard-highlight';
import { ShipmentVolume } from '../components/shipment-volume/shipment-volume';
import { FleetOverview } from '../components/fleet-overview/fleet-overview';
import { RecentShipments } from '../components/recent-shipments/recent-shipments';
import { ViewHeader } from '../../../shared/components/view-header/view-header';

interface HighlightData {
  position: 1 | 2 | 3 | 4;
  label: string;
  icon: LucideIconData;
  statCounter: number;
  percentage: number;
  isPositive: boolean;
}

@Component({
  selector: 'app-dashboard-page',
  imports: [
    DashboardHighlight,
    ShipmentVolume,
    FleetOverview,
    RecentShipments,
    ViewHeader,
    LucideAngularModule,
  ],
  templateUrl: './dashboard-page.html',
})
export class DashboardPage {
  updatedTime: string = 'Just now';
  highlights: HighlightData[] = [
    {
      position: 1,
      label: 'Total Active Shipments',
      icon: Truck,
      statCounter: 1240,
      percentage: 5,
      isPositive: true,
    },
    {
      position: 2,
      label: 'In Transit',
      icon: Send,
      statCounter: 845,
      percentage: 12,
      isPositive: true,
    },
    {
      position: 3,
      label: 'Exceptions',
      icon: TriangleAlert,
      statCounter: 12,
      percentage: 2,
      isPositive: false,
    },
    {
      position: 4,
      label: 'Revenue (MTD)',
      icon: Banknote,
      statCounter: 450,
      percentage: 8,
      isPositive: true,
    },
  ];
  protected readonly calendar = Calendar;
}
