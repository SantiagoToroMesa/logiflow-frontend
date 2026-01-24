import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BrandLogo } from './core/ui/layout/components/brand-logo/brand-logo';
import { Topbar } from './core/ui/layout/topbar/topbar';
import { Sidebar } from './core/ui/layout/sidebar/sidebar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BrandLogo, Topbar, Sidebar],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('logiflow');
}
