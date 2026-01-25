import { Component } from '@angular/core';
import { Eye, LucideIconData, LucideAngularModule } from 'lucide-angular';

enum ShipmentStatus {
  IN_TRANSIT,
  DELIVERED,
  DELAYED,
}

interface ShipmentRow {
  trackingId: string;
  customer: string;
  ETA: string;
  route: string;
  status: ShipmentStatus;
}

@Component({
  selector: 'app-recent-shipments',
  imports: [LucideAngularModule],
  templateUrl: './recent-shipments.html',
})
export class RecentShipments {
  statusConfig = {
    [ShipmentStatus.IN_TRANSIT]: {
      label: 'In Transit',
      classes: 'bg-blue-50 text-blue-700 border border-blue-200',
      dot: 'bg-blue-500',
    },
    [ShipmentStatus.DELIVERED]: {
      label: 'Delivered',
      classes: 'bg-green-50 text-green-700 border border-green-200',
      dot: 'bg-green-500',
    },
    [ShipmentStatus.DELAYED]: {
      label: 'Delayed',
      classes: 'bg-orange-50 text-orange-700 border border-orange-200',
      dot: 'bg-orange-500',
    },
  };

  recentShipments: ShipmentRow[] = [
    {
      trackingId: 'SHP-2049',
      customer: 'Acme-Corp',
      route: 'NY -> LA',
      ETA: 'Oct 24, 2023',
      status: ShipmentStatus.IN_TRANSIT,
    },
    {
      trackingId: 'SHP-2050',
      customer: 'Globex Inc',
      ETA: 'Oct 25, 2023',
      route: 'TX -> FL',
      status: ShipmentStatus.DELIVERED,
    },
    {
      trackingId: 'SHP-2049',
      customer: 'Acme-Corp',
      route: 'NY -> LA',
      ETA: 'Oct 24, 2023',
      status: ShipmentStatus.DELAYED,
    },
    {
      trackingId: 'SHP-2050',
      customer: 'Globex Inc',
      ETA: 'Oct 25, 2023',
      route: 'TX -> FL',
      status: ShipmentStatus.IN_TRANSIT,
    },
  ];

  eye: LucideIconData = Eye;
}
