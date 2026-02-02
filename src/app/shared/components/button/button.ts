import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LucideAngularModule, LucideIconData } from 'lucide-angular';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-button',
  imports: [LucideAngularModule, NgClass],
  templateUrl: './button.html',
})
export class Button {
  @Input() label!: string;
  @Input() icon?: LucideIconData;
  @Input() disabled = false;
  @Input() variant!: 'primary' | 'secondary';

  @Output() clicked = new EventEmitter<void>();
  onClick(): void {
    if (!this.disabled) {
      this.clicked.emit();
    }
  }
}
