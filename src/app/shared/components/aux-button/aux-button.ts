import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-aux-button',
  imports: [],
  templateUrl: './aux-button.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuxButton {
  @Input() label!: string;
  @Input() disabled = false;

  @Output() readonly pressed = new EventEmitter<void>();
}
