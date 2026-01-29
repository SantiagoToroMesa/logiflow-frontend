import { Component } from '@angular/core';
import {LucideAngularModule } from 'lucide-angular';
import { Search, Download, EllipsisVertical} from 'lucide-angular';

enum customerStatus {
  ACTIVE,
  PENDING,
  INACTIVE
}

enum customerType {
  TECHNOLOGY,
  LOGISTICS,
  RETAIL,
  SHIPPING,
  CARGO
}
interface Customer {
  id: number;
  name: string;
  type: customerType;
  contact: string;
  activeShipments: number;
  active: customerStatus;
}

@Component({
  selector: 'app-customer-list',
  imports: [LucideAngularModule],
  templateUrl: './customer-list.html',
  styleUrl: './customer-list.css',
})
export class CustomerList {
  protected readonly search = Search;
  protected readonly download = Download;
  protected readonly ellipsisVertical = EllipsisVertical;

  customers: Customer[] = [
    {
      id: 9921,
      name: 'TechGlobal Inc',
      type: customerType.TECHNOLOGY,
      contact: 'Sarah Jenkins',
      activeShipments: 12,
      active: customerStatus.ACTIVE,
    },
    {
      id: 8832,
      name: 'FastMove Logistics',
      type: customerType.LOGISTICS,
      contact: 'Mike Ross',
      activeShipments: 0,
      active: customerStatus.INACTIVE,
    },
    {
      id: 7712,
      name: 'Retail King',
      type: customerType.RETAIL,
      contact: 'Jessica Pearson',
      activeShipments: 45,
      active: customerStatus.PENDING,
    },
    {
      id: 6421,
      name: 'Ocean Transport',
      type: customerType.SHIPPING,
      contact: 'Daniel Lee',
      activeShipments: 8,
      active: customerStatus.ACTIVE,
    },
    {
      id: 5532,
      name: 'Apex Freight',
      type: customerType.CARGO,
      contact: 'Emily Chen',
      activeShipments: 21,
      active: customerStatus.ACTIVE,
    },
    {
      id: 4401,
      name: 'Nova Retail Group',
      type: customerType.RETAIL,
      contact: 'Laura Gómez',
      activeShipments: 14,
      active: customerStatus.ACTIVE,
    },
    {
      id: 3329,
      name: 'SkyCargo Intl',
      type: customerType.CARGO,
      contact: 'Robert Miles',
      activeShipments: 30,
      active: customerStatus.PENDING,
    },
    {
      id: 2911,
      name: 'UrbanTech Solutions',
      type: customerType.TECHNOLOGY,
      contact: 'Ana Martínez',
      activeShipments: 6,
      active: customerStatus.ACTIVE,
    },
    {
      id: 1854,
      name: 'BlueWave Shipping',
      type: customerType.SHIPPING,
      contact: 'Carlos Rivera',
      activeShipments: 2,
      active: customerStatus.INACTIVE,
    },
    {
      id: 1743,
      name: 'Prime Logistics Co',
      type: customerType.LOGISTICS,
      contact: 'Sofía López',
      activeShipments: 18,
      active: customerStatus.ACTIVE,
    },
    {
      id: 1602,
      name: 'Mercado Central',
      type: customerType.RETAIL,
      contact: 'Juan Pérez',
      activeShipments: 9,
      active: customerStatus.PENDING,
    },
    {
      id: 1499,
      name: 'AeroCargo Express',
      type: customerType.CARGO,
      contact: 'Michael Scott',
      activeShipments: 27,
      active: customerStatus.ACTIVE,
    },
    {
      id: 1320,
      name: 'GreenLine Logistics',
      type: customerType.LOGISTICS,
      contact: 'Paula Andrade',
      activeShipments: 4,
      active: customerStatus.INACTIVE,
    },
    {
      id: 1188,
      name: 'CloudNine Tech',
      type: customerType.TECHNOLOGY,
      contact: 'David Kim',
      activeShipments: 33,
      active: customerStatus.ACTIVE,
    },
    {
      id: 1007,
      name: 'HarborLink Shipping',
      type: customerType.SHIPPING,
      contact: 'Luis Fernández',
      activeShipments: 11,
      active: customerStatus.PENDING,
    },
  ];

  pagedCustomers: Customer[] = [];
  pages: number[] = [];
  pageSize = 5;
  currentPage = 1;
  totalPages = 0;

  ngOnInit() {
    this.totalPages = Math.ceil(this.customers.length / this.pageSize);
    this.updatePage();
  }

  updatePage() {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;

    this.pagedCustomers = this.customers.slice(start, end);

    this.totalPages = Math.ceil(this.customers.length / this.pageSize);
    this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  goToPage(page: number) {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
    this.updatePage();
  }

  nextPage() {
    this.goToPage(this.currentPage + 1);
  }

  prevPage() {
    this.goToPage(this.currentPage - 1);
  }

  ActiveConfig = {
    [customerStatus.ACTIVE]: {
      label: 'Active',
      classes: 'bg-green-50 text-green-700 border border-green-200',
      dot: 'bg-green-500',
    },
    [customerStatus.PENDING]: {
      label: 'Pending',
      classes: 'bg-orange-50 text-orange-700 border border-orange-200',
      dot: 'bg-orange-500',
    },
    [customerStatus.INACTIVE]: {
      label: 'Inactive',
      classes: 'bg-slate-50 text-slate-700 border border-slate-200',
      dot: 'bg-slate-500',
    },
  };
  TypeConfig = {
    [customerType.TECHNOLOGY]: {
      label: 'Technology / Enterprise',
      classes: 'bg-blue-100 text-blue-700 border border-blue-200',
      dot: 'bg-blue-500',
    },
    [customerType.LOGISTICS]: {
      label: 'Logistics / Partner',
      classes: 'bg-orange-100 text-orange-700 border border-orange-200',
      dot: 'bg-orange-500',
    },
    [customerType.RETAIL]: {
      label: 'Retail / Global',
      classes: 'bg-purple-100 text-purple-700 border border-purple-200',
      dot: 'bg-purple-500',
    },
    [customerType.SHIPPING]: {
      label: 'Shipping / Local',
      classes: 'bg-green-100 text-green-700 border border-green-200',
      dot: 'bg-green-500',
    },
    [customerType.CARGO]: {
      label: 'Cargo / Air',
      classes: 'bg-slate-100 text-slate-700 border border-slate-200',
      dot: 'bg-slate-500',
    },
  };
  getInitials(name: string): string {
    if (!name) return '';

    return name
      .split(' ')
      .slice(0, 2)
      .map((word) => word[0].toUpperCase())
      .join('');
  }

  protected readonly Math = Math;
}
