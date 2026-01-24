import { Component } from '@angular/core';
import { Ellipsis, LucideAngularModule, LucideIconData } from 'lucide-angular';

@Component({
  selector: 'app-shipment-volume',
  imports: [LucideAngularModule],
  templateUrl: './shipment-volume.html',
})
export class ShipmentVolume {
  ellipsis: LucideIconData = Ellipsis;
}
