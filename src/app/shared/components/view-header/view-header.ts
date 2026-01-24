import { Component, Input } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-view-header',
  imports: [LucideAngularModule],
  templateUrl: './view-header.html',
})
export class ViewHeader {
  @Input() title!: string;
  @Input() subtitle!: string;
}
