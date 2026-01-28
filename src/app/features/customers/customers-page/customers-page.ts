import { Component } from '@angular/core';
import { ViewHeader } from '../../../shared/components/view-header/view-header';
import { LucideAngularModule, Plus } from 'lucide-angular';
import { CustomerStats } from '../components/customer-stats/customer-stats';
import {CustomerList} from '../components/customer-list/customer-list';

interface CustomerData {
  label: string;
  statCounter: number;
  percentage: number;
  isPositive: boolean;
}

@Component({
  selector: 'app-customers-page',
  imports: [ViewHeader, LucideAngularModule, CustomerStats, CustomerList],
  templateUrl: './customers-page.html',
  styleUrl: './customers-page.css',
})
export class CustomersPage {

  CustomersStats: CustomerData[] = [
    {label: 'New Customers', statCounter: 1240, percentage: 5, isPositive: true},
    {label: 'Active Now', statCounter: 850, percentage: 12, isPositive: true},
    {label: 'Pending Approval', statCounter: 12, percentage: -2, isPositive: false},
  ]

  protected readonly plus = Plus;
}
