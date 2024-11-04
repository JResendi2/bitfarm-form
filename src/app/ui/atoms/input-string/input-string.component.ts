import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-string',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './input-string.component.html',
  styleUrl: './input-string.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputStringComponent {
  @Input() type: string = 'text';
}
