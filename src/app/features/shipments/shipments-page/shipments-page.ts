import { Component } from '@angular/core';
import { Download, LucideAngularModule, Plus } from 'lucide-angular';
import { ViewHeader } from '../../../shared/components/view-header/view-header';
import { Button } from '../../../shared/components/button/button';
import { ShipmentsTable } from '../components/shipments-table/shipments-table';

@Component({
  selector: 'app-shipments-page',
  imports: [LucideAngularModule, ViewHeader, Button, ShipmentsTable],
  templateUrl: './shipments-page.html',
})
export class ShipmentsPage {
  protected readonly Download = Download;
  protected readonly Plus = Plus;
}
