import { Component } from '@angular/core';
import { Eye, LucideIconData, LucideAngularModule } from 'lucide-angular';
import { ShipmentStatus } from '../../../../core/models/shipment-status';
import { AuxButton } from '../../../../shared/components/aux-button/aux-button';
import { PaginationComponent } from '../../../../shared/components/pagination-component/pagination-component';

interface ShipmentRow {
  id: string;
  customer: string;
  ETA: string;
  route: string;
  status: ShipmentStatus;
}

@Component({
  selector: 'app-recent-shipments',
  imports: [LucideAngularModule, AuxButton, PaginationComponent],
  templateUrl: './recent-shipments.html',
})
export class RecentShipments {
  statusConfig = {
    [ShipmentStatus.IN_TRANSIT]: {
      label: 'In Transit',
      classes: 'bg-blue-50 text-blue-700 border border-blue-200',
      dot: 'bg-blue-500',
    },
    [ShipmentStatus.PENDING]: {
      label: 'PENDING',
      classes: 'bg-orange-50 text-orange-700 border border-orange-200',
      dot: 'bg-orange-500',
    },
    [ShipmentStatus.INCIDENT]: {
      label: 'Delivered',
      classes: 'bg-green-50 text-green-700 border border-green-200',
      dot: 'bg-green-500',
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
      id: 'SHP-2049',
      customer: 'Acme-Corp',
      route: 'NY -> LA',
      ETA: 'Oct 24, 2023',
      status: ShipmentStatus.IN_TRANSIT,
    },
    {
      id: 'SHP-2050',
      customer: 'Globex Inc',
      ETA: 'Oct 25, 2023',
      route: 'TX -> FL',
      status: ShipmentStatus.DELIVERED,
    },
    {
      id: 'SHP-2049',
      customer: 'Acme-Corp',
      route: 'NY -> LA',
      ETA: 'Oct 24, 2023',
      status: ShipmentStatus.DELAYED,
    },
    {
      id: 'SHP-2050',
      customer: 'Globex Inc',
      ETA: 'Oct 25, 2023',
      route: 'TX -> FL',
      status: ShipmentStatus.IN_TRANSIT,
    },
    {
      id: 'SHP-2049',
      customer: 'Acme-Corp',
      route: 'NY -> LA',
      ETA: 'Oct 24, 2023',
      status: ShipmentStatus.IN_TRANSIT,
    },
    {
      id: 'SHP-2050',
      customer: 'Globex Inc',
      ETA: 'Oct 25, 2023',
      route: 'TX -> FL',
      status: ShipmentStatus.DELIVERED,
    },
    {
      id: 'SHP-2049',
      customer: 'Acme-Corp',
      route: 'NY -> LA',
      ETA: 'Oct 24, 2023',
      status: ShipmentStatus.DELAYED,
    },
    {
      id: 'SHP-2050',
      customer: 'Globex Inc',
      ETA: 'Oct 25, 2023',
      route: 'TX -> FL',
      status: ShipmentStatus.IN_TRANSIT,
    },
  ];

  pagedShiments: ShipmentRow[] = [];
  pages: number[] = [];
  pageSize = 5;
  currentPage = 1;
  totalPages = 0;

  ngOnInit() {
    this.totalPages = Math.ceil(this.recentShipments.length / this.pageSize);
    this.updatePage();
  }

  updatePage() {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;

    this.pagedShiments = this.recentShipments.slice(start, end);

    this.totalPages = Math.ceil(this.recentShipments.length / this.pageSize);
    this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  goToPage(page: number) {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
    this.updatePage();
  }

  eye: LucideIconData = Eye;
}
