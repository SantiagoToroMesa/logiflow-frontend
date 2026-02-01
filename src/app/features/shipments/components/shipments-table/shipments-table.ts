import { Component } from '@angular/core';
import { Eye, LucideAngularModule } from 'lucide-angular';
import { ShipmentStatus } from '../../../../core/models/shipment-status';
import { NgClass } from '@angular/common';
import { AuxButton } from '../../../../shared/components/aux-button/aux-button';

interface Shipment {
  id: string;
  status: ShipmentStatus;
  client: string;
  origin: string;
  destination: string;
  ETA: string;
}

@Component({
  selector: 'app-shipments-table',
  imports: [LucideAngularModule, NgClass, AuxButton],
  templateUrl: './shipments-table.html',
})
export class ShipmentsTable {
  totalResults: number = 128;

  protected readonly eye = Eye;

  statusConfig = {
    [ShipmentStatus.IN_TRANSIT]: {
      label: 'In Transit',
      classes: 'bg-blue-50 text-blue-700 border border-blue-200',
      dot: 'bg-blue-500',
    },
    [ShipmentStatus.PENDING]: {
      label: 'Pending',
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

  shipments: Shipment[] = [
    {
      id: 'SHP-9281',
      status: ShipmentStatus.IN_TRANSIT,
      client: 'Acme Group',
      origin: 'Shanghai, CN',
      destination: 'Los Angeles, USA',
      ETA: 'Oct 24, 2023',
    },
    {
      id: 'SHP-9282',
      status: ShipmentStatus.INCIDENT,
      client: 'Globex Inc.',
      origin: 'Berlin, DE',
      destination: 'Paris, FR',
      ETA: 'Delayed',
    },
    {
      id: 'SHP-9283',
      status: ShipmentStatus.DELIVERED,
      client: 'Stark Ind.',
      origin: 'New York, USA',
      destination: 'London, UK',
      ETA: 'Oct 20, 2023',
    },
    {
      id: 'SHP-9284',
      status: ShipmentStatus.PENDING,
      client: 'Wayne Ent.',
      origin: 'Gotham, NJ',
      destination: 'Metropolis, NY',
      ETA: 'Oct 26, 2023',
    },
    {
      id: 'SHP-9285',
      status: ShipmentStatus.IN_TRANSIT,
      client: 'Umbrella Corp',
      origin: 'Raccoon City, USA',
      destination: 'Tokyo, JP',
      ETA: 'Oct 28, 2023',
    },
  ];
}
